export const STATUS = {
  SOLVED: "solved",
  REVIEW: "review",
  PRACTICING: "practicing",
  STUCK: "stuck",
  NOT_STARTED: "not_started",
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];

export const STATUS_DISPLAY: Record<Status, string> = {
  solved: "🟢",
  review: "🟡",
  practicing: "🟠",
  stuck: "🔴",
  not_started: "⚫",
};

export const STATUS_LABELS: Record<Status, string> = {
  solved: "Solved",
  review: "Needs Review",
  practicing: "Practicing",
  stuck: "Stuck",
  not_started: "Not Started",
};