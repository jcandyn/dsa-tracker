export const COURSES = {
  INTERVIEW_CRASH_COURSE: "Interview Crash Course",
  NEETCODE_150: "NeetCode 150",
  BLIND_75: "Blind 75",
  CUSTOM: "Custom",
} as const;

export type Course = (typeof COURSES)[keyof typeof COURSES];