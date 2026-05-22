"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type WaitlistModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const titleId = useId();
  const descId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setErrorMessage("");
    const t = window.setTimeout(() => inputRef.current?.focus(), 150);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Unable to join the waitlist.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleClose = () => {
    onClose();
    window.setTimeout(() => {
      setEmail("");
      setStatus("idle");
      setErrorMessage("");
    }, 280);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="waitlist-modal-root fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 sm:px-6">
          <motion.button
            type="button"
            aria-label="Close waitlist dialog"
            className="waitlist-modal-backdrop absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={handleClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={status !== "success" ? descId : undefined}
            className="waitlist-modal-panel relative z-[1] w-full max-w-[480px]"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={handleClose}
              className="waitlist-modal-close"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M5 5l8 8M13 5l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {status === "success" ? (
              <div className="waitlist-modal-body waitlist-modal-body--success">
                <div className="waitlist-success-icon" aria-hidden>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path
                      d="M6 13l5 5 9-10"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 id={titleId} className="waitlist-modal-title text-center">
                  You&apos;re on the list
                </h2>
                <p className="waitlist-modal-copy text-center">
                  We&apos;ll email{" "}
                  <span className="font-medium text-[var(--color-text-primary)]">{email}</span> when
                  early access opens.
                </p>
                <button type="button" onClick={handleClose} className="btn-waitlist mt-10 w-full">
                  Done
                </button>
              </div>
            ) : (
              <div className="waitlist-modal-body">
                <p className="platform-eyebrow">Early access</p>

                <h2 id={titleId} className="waitlist-modal-title">
                  Join the Riviso waitlist
                </h2>

                <p id={descId} className="waitlist-modal-copy">
                  Be first to run AI-native SEO workflows. We&apos;ll notify your team when spots
                  open.
                </p>

                <form onSubmit={handleSubmit} className="waitlist-form">
                  <div className="waitlist-field">
                    <label htmlFor="waitlist-email" className="waitlist-label">
                      Work email
                    </label>
                    <input
                      ref={inputRef}
                      id="waitlist-email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      autoComplete="email"
                      disabled={status === "loading"}
                      aria-invalid={status === "error"}
                      className="waitlist-input w-full"
                    />
                  </div>

                  {status === "error" && errorMessage && (
                    <div className="waitlist-error" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn("btn-waitlist w-full", status === "loading" && "is-loading")}
                  >
                    {status === "loading" ? "Joining..." : "Join Waitlist"}
                  </button>
                </form>

                <p className="waitlist-footnote">No spam · Unsubscribe anytime</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
