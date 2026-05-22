import { NextResponse } from "next/server";
import { formatWaitlistError, sendWaitlistNotification } from "@/lib/waitlist-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    await sendWaitlistNotification(email);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist]", err);
    return NextResponse.json(
      { error: formatWaitlistError(err) },
      { status: 500 }
    );
  }
}
