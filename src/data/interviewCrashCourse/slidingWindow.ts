import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const slidingWindow = createProblemSet(TOPICS.SLIDING_WINDOW, PATTERNS.SLIDING_WINDOW, [
  { title: "Best Time to Buy and Sell Stock", slug: "best-time-to-buy-and-sell-stock", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Array", "Sliding Window"] },
  { title: "Longest Substring Without Repeating Characters", slug: "longest-substring-without-repeating-characters", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Hash Table", "String", "Sliding Window"] },
  { title: "Longest Repeating Character Replacement", slug: "longest-repeating-character-replacement", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Hash Table", "String", "Sliding Window"] },
  { title: "Minimum Window Substring", slug: "minimum-window-substring", difficulty: DIFFICULTY.HARD, time: "O(m + n)", space: "O(m + n)", tags: ["Hash Table", "String", "Sliding Window"] },
]);
