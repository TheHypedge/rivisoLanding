# Vercel environment variables (waitlist email)

Add these in the Vercel dashboard for your Riviso project.

**Path:** Project → **Settings** → **Environment Variables**

Enable for **Production**, **Preview**, and **Development** (or at least Production).

| Name | Value | Notes |
|------|--------|--------|
| `WAITLIST_NOTIFY_EMAIL` | `info@thehypedge.com` | Inbox that receives waitlist signups |
| `SMTP_HOST` | `smtp.hostinger.com` | Hostinger SMTP host |
| `SMTP_PORT` | `465` | Use `587` if SSL fails |
| `SMTP_SECURE` | `true` | Use `false` when `SMTP_PORT` is `587` |
| `SMTP_USER` | `team@thehypedge.com` | Full Hostinger mailbox address |
| `SMTP_PASS` | *(your mailbox password)* | Mark as **Sensitive**. If it contains `#`, wrap in quotes in Vercel too |
| `SMTP_FROM` | `Riviso Waitlist <team@thehypedge.com>` | Must match the `SMTP_USER` domain |

**Note:** In `.env` files, `#` starts a comment. Passwords like `HeTe@m#@!2025` must be quoted: `SMTP_PASS="HeTe@m#@!2025"`.

## After saving

1. **Redeploy** the project (Deployments → … → Redeploy) so new variables load.
2. Open the live site and submit **Join Waitlist** to confirm mail arrives at `info@thehypedge.com`.

## Troubleshooting

- **Authentication failed:** Re-check password in hPanel; use the mailbox password, not hPanel login.
- **SSL errors:** Switch to `SMTP_PORT=587` and `SMTP_SECURE=false`.
- **Sender rejected:** `SMTP_FROM` must use `@thehypedge.com` on the same account as `SMTP_USER`.

## Security

- Never commit `.env.local` or paste passwords in git.
- Rotate the mailbox password if it was shared in chat or logs.
