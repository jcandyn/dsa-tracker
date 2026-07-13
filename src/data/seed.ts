import {
  arraysStrings,
  hashing,
  twoPointers,
} from "./interviewCrashCourse";

import { PLATFORMS, STATUS } from "@/constants";

import type { Problem } from "@/types/problem";

export const seedProblems: Problem[] = [
  ...arraysStrings,
  ...hashing,
  ...twoPointers,
].map(problem => ({
  id: crypto.randomUUID(),

  ...problem,

  platform: PLATFORMS.LEETCODE,

  status: STATUS.NOT_STARTED,

  confidence: 1,

  completed: false,

  attempts: 0,

  usedHint: false,

  notes: "",

  createdAt: new Date().toISOString(),

  updatedAt: new Date().toISOString(),
}));