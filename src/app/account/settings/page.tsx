import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SettingsForm } from "@/components/forms/SettingsForm";
import { getDictionary, getLocale } from "@/lib/i18n";
import { getSessionUser } from "@/lib/session";

export const metadata: Metadata = { title: "Account settings" };

export default async function AccountSettingsPage() {
  const user = await getSessionUser();
  if (!user) {
    redirect("/login?next=/account/settings");
  }
  const dict = getDictionary(await getLocale());

  return (
    <div className="mx-auto max-w-lg px-5 py-16 sm:py-20">
      <h1 className="text-3xl font-medium tracking-tight text-white">
        {dict.account.settings}
      </h1>
      <p className="mt-2 text-zinc-400">{dict.account.settingsHint}</p>
      <div className="mt-8 rounded-[28px] border border-white/8 bg-white/3 p-6">
        <SettingsForm dict={dict} user={user} />
      </div>
    </div>
  );
}
