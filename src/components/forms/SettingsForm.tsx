"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LOCALES, type Locale } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";
import type { PublicUser } from "@/lib/users";

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white/30";

type Props = {
  dict: Dictionary;
  user: PublicUser;
};

export function SettingsForm({ dict, user }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "saving" | "ok" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("saving");
    const response = await fetch("/api/account", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        workshopName: data.get("workshopName"),
        locale: data.get("locale"),
      }),
    });
    setStatus(response.ok ? "ok" : "error");
    if (response.ok) {
      router.refresh();
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block text-sm text-zinc-400">
        {dict.auth.name}
        <input required name="name" defaultValue={user.name} className={fieldClass} />
      </label>
      <label className="block text-sm text-zinc-400">
        {dict.auth.workshop}
        <input
          required
          name="workshopName"
          defaultValue={user.workshopName}
          className={fieldClass}
        />
      </label>
      <label className="block text-sm text-zinc-400">
        {dict.auth.email}
        <input disabled value={user.email} className={`${fieldClass} opacity-60`} />
      </label>
      <label className="block text-sm text-zinc-400">
        {dict.account.language}
        <select
          name="locale"
          defaultValue={user.locale}
          className={fieldClass}
        >
          {LOCALES.map((locale: Locale) => (
            <option key={locale} value={locale}>
              {locale.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        disabled={status === "saving"}
        className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-200 disabled:opacity-60"
      >
        {dict.account.save}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-zinc-300">{dict.account.saved}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-300">{dict.account.saveError}</p>
      ) : null}
    </form>
  );
}
