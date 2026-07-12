export const PLATFORMS = {
  LEETCODE: "LeetCode",
  NEETCODE: "NeetCode",
  HACKERRANK: "HackerRank",
  CODESIGNAL: "CodeSignal",
  CUSTOM: "Custom",
} as const;

export type Platform =
  (typeof PLATFORMS)[keyof typeof PLATFORMS];