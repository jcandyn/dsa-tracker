export const DIFFICULTY = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard",
} as const;

export type Difficulty =
  (typeof DIFFICULTY)[keyof typeof DIFFICULTY];

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Easy: "text-green-500",
  Medium: "text-yellow-500",
  Hard: "text-red-500",
};