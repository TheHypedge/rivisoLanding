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
  if (/535|authentication failed|invalid login/i.test(raw)) {
    return "Email could not be sent right now. Please try again in a moment.";
  }
  if (/ECONNREFUSED|ETIMEDOUT|ENOTFOUND/i.test(raw)) {
    return "Could not reach the mail server. Please try again shortly.";
  }
  return raw || "Something went wrong. Please try again.";
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
        Sent from riviso.app · ${new Date().toUTCString()}
      </p>
    </div>
  `;
  const text = `New Riviso waitlist signup\n\nEmail: ${subscriberEmail}\nTime: ${new Date().toISOString()}`;
  return { subject, html, text };
}

function createSmtpTransport() {
  const host = env("SMTP_HOST");
  if (!host) return null;

  const port = Number(env("SMTP_PORT") ?? 465);
  const secureFlag = env("SMTP_SECURE");
  const secure =
    secureFlag === "true" || (secureFlag !== "false" && port === 465);

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

async function sendViaSmtp(subscriberEmail: string) {
  const transporter = createSmtpTransport();
  if (!transporter) return false;

  const { subject, html, text } = buildMessage(subscriberEmail);
  const from =
    env("SMTP_FROM") ?? env("SMTP_USER") ?? "Riviso Waitlist <noreply@example.com>";

  if (!env("SMTP_USER") || !env("SMTP_PASS")) {
    throw new Error("SMTP_USER and SMTP_PASS are required when SMTP_HOST is set.");
  }

  await transporter.sendMail({
    from,
    to: NOTIFY_EMAIL,
    replyTo: subscriberEmail,
    subject,
    html,
    text,
  });

  return true;
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
      "Email is not configured. Add Hostinger SMTP settings (SMTP_HOST, SMTP_USER, SMTP_PASS) to .env.local."
    );
  }

  console.info(`[waitlist] ${subscriberEmail} → ${NOTIFY_EMAIL} (dev mode, no email sent)`);
}
