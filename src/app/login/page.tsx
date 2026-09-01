import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthForm } from "@/components/forms/AuthForm";
import { getDictionary, getLocale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Log in" };

export default async function LoginPage() {
  const dict = getDictionary(await getLocale());
  return (
    <div className="mx-auto max-w-md px-5 py-16 sm:py-24">
      <h1 className="text-3xl font-medium tracking-tight text-white">
        {dict.auth.loginTitle}
      </h1>
      <p className="mt-2 text-zinc-400">{dict.auth.loginSubtitle}</p>
      <div className="mt-8 rounded-[28px] border border-white/8 bg-white/3 p-6">
        <Suspense>
          <AuthForm mode="login" dict={dict} />
        </Suspense>
      </div>
    </div>
  );
}
