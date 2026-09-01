import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthForm } from "@/components/forms/AuthForm";
import { getDictionary, getLocale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Create account" };

export default async function RegisterPage() {
  const dict = getDictionary(await getLocale());
  return (
    <div className="mx-auto max-w-md px-5 py-16 sm:py-24">
      <h1 className="text-3xl font-medium tracking-tight text-white">
        {dict.auth.registerTitle}
      </h1>
      <p className="mt-2 text-zinc-400">{dict.auth.registerSubtitle}</p>
      <div className="mt-8 rounded-[28px] border border-white/8 bg-white/3 p-6">
        <Suspense>
          <AuthForm mode="register" dict={dict} />
        </Suspense>
      </div>
    </div>
  );
}
