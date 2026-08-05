import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const stacksQueues = createProblemSet(TOPICS.STACK, PATTERNS.MONOTONIC_STACK, [
  { title: "Valid Parentheses", slug: "valid-parentheses", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(n)", tags: ["String", "Stack"] },
  { title: "Min Stack", slug: "min-stack", difficulty: DIFFICULTY.MEDIUM, time: "O(1)", space: "O(n)", tags: ["Stack", "Design"] },
  { title: "Evaluate Reverse Polish Notation", slug: "evaluate-reverse-polish-notation", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Array", "Math", "Stack"] },
  { title: "Daily Temperatures", slug: "daily-temperatures", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Array", "Stack", "Monotonic Stack"] },
  { title: "Implement Queue using Stacks", slug: "implement-queue-using-stacks", difficulty: DIFFICULTY.EASY, time: "O(1) amortized", space: "O(n)", tags: ["Stack", "Design", "Queue"] },
]);
