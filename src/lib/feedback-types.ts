export const FEEDBACK_TYPES = ["bug", "feature", "question"] as const;
export type FeedbackType = (typeof FEEDBACK_TYPES)[number];

export function isFeedbackType(value: unknown): value is FeedbackType {
  return (
    typeof value === "string" && FEEDBACK_TYPES.includes(value as FeedbackType)
  );
}

export type FeedbackMessage = {
  id: string;
  type: FeedbackType;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};
