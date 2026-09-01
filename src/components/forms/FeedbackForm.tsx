"use client";

import { useState } from "react";
import { FEEDBACK_TYPES } from "@/lib/feedback-types";
import type { FeedbackTicket } from "@/lib/feedback-ticket";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary;
  ticket: FeedbackTicket;
};

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-border bg-elevated px-4 py-3 text-sm text-foreground outline-none placeholder:text-faint focus:border-foreground/30";

export function FeedbackForm({ dict, ticket }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error" | "confirm">(
    "idle",
  );
  const copy = dict.feedback;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const confirmed = data.get("confirmed") === "on";
    if (!confirmed) {
      setStatus("confirm");
      return;
    }
    setStatus("sending");
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: data.get("type"),
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
        website: data.get("website"),
        confirmed: true,
        ticket: {
          nonce: ticket.nonce,
          issuedAt: ticket.issuedAt,
          sig: ticket.sig,
        },
      }),
    });
    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      setStatus(payload?.error === "confirm" ? "confirm" : "error");
      return;
    }
    form.reset();
    setStatus("ok");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative space-y-4 [&:not(:has(input[name=confirmed]:checked))_button[type=submit]]:pointer-events-none [&:not(:has(input[name=confirmed]:checked))_button[type=submit]]:opacity-60"
    >
      <label className="block text-sm text-muted">
        {copy.typeLabel}
        <select required name="type" defaultValue="question" className={fieldClass}>
          {FEEDBACK_TYPES.map((type) => (
            <option key={type} value={type}>
              {copy.types[type]}
            </option>
          ))}
        </select>
      </label>
      <div hidden aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" name="website" />
      </div>
      <label className="block text-sm text-muted">
        {copy.name}
        <input required name="name" maxLength={200} className={fieldClass} />
      </label>
      <label className="block text-sm text-muted">
        {copy.email}
        <input required type="email" name="email" maxLength={254} className={fieldClass} />
      </label>
      <label className="block text-sm text-muted">
        {copy.message}
        <textarea
          required
          name="message"
          maxLength={8000}
          rows={5}
          placeholder={copy.messagePlaceholder}
          className={fieldClass}
        />
      </label>
      <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
        <input
          required
          type="checkbox"
          name="confirmed"
          className="mt-0.5 size-4 shrink-0 rounded border-border bg-elevated accent-cta"
        />
        <span>{copy.confirm}</span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-cta-foreground hover:bg-cta-hover disabled:opacity-60"
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-muted">{copy.success}</p>
      ) : null}
      {status === "confirm" ? (
        <p className="text-sm text-danger">{copy.confirmError}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-danger">{copy.error}</p>
      ) : null}
    </form>
  );
}
