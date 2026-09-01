"use client";

import { useState } from "react";
import { FEEDBACK_TYPES } from "@/lib/feedback-types";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary;
};

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-white/30";

export function FeedbackForm({ dict }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const copy = dict.feedback;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: data.get("type"),
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      }),
    });
    if (!response.ok) {
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("ok");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block text-sm text-zinc-400">
        {copy.typeLabel}
        <select required name="type" defaultValue="question" className={fieldClass}>
          {FEEDBACK_TYPES.map((type) => (
            <option key={type} value={type}>
              {copy.types[type]}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm text-zinc-400">
        {copy.name}
        <input required name="name" className={fieldClass} />
      </label>
      <label className="block text-sm text-zinc-400">
        {copy.email}
        <input required type="email" name="email" className={fieldClass} />
      </label>
      <label className="block text-sm text-zinc-400">
        {copy.message}
        <textarea
          required
          name="message"
          rows={5}
          placeholder={copy.messagePlaceholder}
          className={fieldClass}
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-200 disabled:opacity-60"
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-zinc-300">{copy.success}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-300">{copy.error}</p>
      ) : null}
    </form>
  );
}
