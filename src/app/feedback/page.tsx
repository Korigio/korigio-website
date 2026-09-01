import type { Metadata } from "next";
import { FeedbackForm } from "@/components/forms/FeedbackForm";
import { issueFeedbackTicket } from "@/lib/feedback-ticket";
import { getDictionary, getLocale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Feedback" };

export default async function FeedbackPage() {
  const dict = getDictionary(await getLocale());

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          {dict.feedback.kicker}
        </p>
        <h1 className="mt-3 max-w-xl text-4xl font-medium tracking-tight text-white sm:text-5xl">
          {dict.feedback.title}
        </h1>
        <p className="mt-5 max-w-lg text-lg text-zinc-400">{dict.feedback.subtitle}</p>
      </div>
      <div className="rounded-[32px] border border-white/8 bg-white/3 p-6 sm:p-8">
        <FeedbackForm dict={dict} ticket={issueFeedbackTicket()} />
      </div>
    </div>
  );
}
