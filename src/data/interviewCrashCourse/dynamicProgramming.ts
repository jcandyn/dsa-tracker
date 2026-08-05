import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const dynamicProgramming = createProblemSet(TOPICS.DP, PATTERNS.DP, [
  { title: "Climbing Stairs", slug: "climbing-stairs", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Math", "Dynamic Programming"] },
  { title: "House Robber", slug: "house-robber", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Array", "Dynamic Programming"] },
  { title: "Coin Change", slug: "coin-change", difficulty: DIFFICULTY.MEDIUM, time: "O(n * amount)", space: "O(amount)", tags: ["Array", "Dynamic Programming"] },
  { title: "Longest Increasing Subsequence", slug: "longest-increasing-subsequence", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(n)", tags: ["Array", "Binary Search", "Dynamic Programming"] },
  { title: "Longest Common Subsequence", slug: "longest-common-subsequence", difficulty: DIFFICULTY.MEDIUM, time: "O(mn)", space: "O(mn)", tags: ["String", "Dynamic Programming"] },
]);
