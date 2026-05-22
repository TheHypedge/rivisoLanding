import { Resend } from "resend";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

const NOTIFY_EMAIL = process.env.WAITLIST_NOTIFY_EMAIL ?? "info@thehypedge.com";

function env(key: string) {
  const value = process.env[key]?.trim();
  if (!value) return undefined;
  return value.replace(/^["']|["']$/g, "");
}

export function formatWaitlistError(err: unknown): string {
  const raw = err instanceof Error ? err.message : "";
  if (/535|authentication failed|invalid login|EAUTH/i.test(raw)) {
    return "We couldn't send your request right now. Please try again shortly.";
  }
  if (/ECONNREFUSED|ETIMEDOUT|ENOTFOUND/i.test(raw)) {
    return "Could not reach our servers. Please try again in a moment.";
  }
  if (/not configured/i.test(raw)) {
    return "Waitlist is temporarily unavailable. Please email info@thehypedge.com.";
  }
  return "Something went wrong. Please try again.";
}

function buildMessage(subscriberEmail: string) {
  const subject = "New Riviso waitlist signup";
  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 480px;">
      <h2 style="color: #0f172a; margin-bottom: 8px;">New waitlist signup</h2>
      <p style="color: #475569; font-size: 15px; line-height: 1.6;">
        A visitor joined the Riviso waitlist from the landing page.
      </p>
      <p style="margin-top: 16px; padding: 12px 16px; background: #fff7ed; border-radius: 8px; color: #9a3412; font-weight: 600;">
        ${subscriberEmail}
      </p>
      <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
        Sent from riviso.com · ${new Date().toUTCString()}
      </p>
    </div>
  `;
  const text = `New Riviso waitlist signup\n\nEmail: ${subscriberEmail}\nTime: ${new Date().toISOString()}`;
  return { subject, html, text };
}

function createSmtpTransport(port: number, secure: boolean) {
  const host = env("SMTP_HOST");
  if (!host) return null;

  const options: SMTPTransport.Options = {
    host,
    port,
    secure,
    auth: {
      user: env("SMTP_USER"),
      pass: env("SMTP_PASS"),
    },
  };

  if (!secure && port === 587) {
    options.requireTLS = true;
  }

  return nodemailer.createTransport(options);
}

async function sendWithTransport(
  transporter: nodemailer.Transporter,
  subscriberEmail: string
) {
  const { subject, html, text } = buildMessage(subscriberEmail);
  const from =
    env("SMTP_FROM") ?? env("SMTP_USER") ?? "Riviso Waitlist <noreply@example.com>";

  await transporter.sendMail({
    from,
    to: NOTIFY_EMAIL,
    replyTo: subscriberEmail,
    subject,
    html,
    text,
  });
}

async function sendViaSmtp(subscriberEmail: string) {
  if (!env("SMTP_HOST") || !env("SMTP_USER") || !env("SMTP_PASS")) {
    return false;
  }

  const configuredPort = Number(env("SMTP_PORT") ?? 465);
  const configuredSecure = env("SMTP_SECURE") === "true" || configuredPort === 465;

  const attempts: { port: number; secure: boolean }[] = [
    { port: configuredPort, secure: configuredSecure },
    { port: 587, secure: false },
    { port: 465, secure: true },
  ];

  const seen = new Set<string>();
  let lastError: unknown;

  for (const { port, secure } of attempts) {
    const key = `${port}-${secure}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const transporter = createSmtpTransport(port, secure);
    if (!transporter) continue;

    try {
      await sendWithTransport(transporter, subscriberEmail);
      return true;
    } catch (err) {
      lastError = err;
      const msg = err instanceof Error ? err.message : "";
      if (!/535|EAUTH|authentication/i.test(msg)) throw err;
    }
  }

  if (lastError) throw lastError;
  return false;
}

async function sendViaResend(subscriberEmail: string) {
  if (!process.env.RESEND_API_KEY) return false;

  const { subject, html, text } = buildMessage(subscriberEmail);
  const from =
    process.env.WAITLIST_FROM_EMAIL ?? "Riviso Waitlist <onboarding@resend.dev>";

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from,
    to: NOTIFY_EMAIL,
    subject,
    html,
    text,
    replyTo: subscriberEmail,
  });

  if (error) throw new Error(error.message);
  return true;
}

export async function sendWaitlistNotification(subscriberEmail: string) {
  if (env("SMTP_HOST")) {
    const sent = await sendViaSmtp(subscriberEmail);
    if (sent) return;
  }

  if (process.env.RESEND_API_KEY) {
    const sent = await sendViaResend(subscriberEmail);
    if (sent) return;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Email is not configured. Add SMTP_HOST, SMTP_USER, and SMTP_PASS in Vercel environment variables."
    );
  }

  console.info(`[waitlist] ${subscriberEmail} → ${NOTIFY_EMAIL} (dev mode, no email sent)`);
}
