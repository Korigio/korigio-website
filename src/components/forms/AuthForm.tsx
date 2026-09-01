"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-white/30";

type Props = {
  mode: "login" | "register";
  dict: Dictionary;
};

export function AuthForm({ mode, dict }: Props) {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/account";
  const [error, setError] = useState<string | null>(null);
  const [working, setWorking] = useState(false);
  const copy = dict.auth;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setWorking(true);
    setError(null);
    const response = await fetch(
      mode === "login" ? "/api/auth/login" : "/api/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
          name: data.get("name"),
          workshopName: data.get("workshopName"),
        }),
      },
    );
    const payload = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    setWorking(false);
    if (!response.ok) {
      const key = payload?.error;
      setError(
        key === "exists"
          ? copy.exists
          : key === "weak"
            ? copy.weak
            : key === "required"
              ? copy.required
              : copy.invalid,
      );
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {mode === "register" ? (
        <>
          <label className="block text-sm text-zinc-400">
            {copy.name}
            <input required name="name" className={fieldClass} />
          </label>
          <label className="block text-sm text-zinc-400">
            {copy.workshop}
            <input required name="workshopName" className={fieldClass} />
          </label>
        </>
      ) : null}
      <label className="block text-sm text-zinc-400">
        {copy.email}
        <input required type="email" name="email" className={fieldClass} />
      </label>
      <label className="block text-sm text-zinc-400">
        {copy.password}
        <input required type="password" name="password" minLength={8} className={fieldClass} />
      </label>
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
      <button
        type="submit"
        disabled={working}
        className="w-full rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-200 disabled:opacity-60"
      >
        {working
          ? copy.working
          : mode === "login"
            ? copy.submitLogin
            : copy.submitRegister}
      </button>
      <p className="text-sm text-zinc-500">
        {mode === "login" ? (
          <>
            {copy.noAccount}{" "}
            <Link href="/register" className="text-white hover:underline">
              {dict.nav.register}
            </Link>
          </>
        ) : (
          <>
            {copy.hasAccount}{" "}
            <Link href="/login" className="text-white hover:underline">
              {dict.nav.login}
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
