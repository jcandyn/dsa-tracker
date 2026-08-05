import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const greedy = createProblemSet(TOPICS.GREEDY, PATTERNS.GREEDY, [
  { title: "Maximum Subarray", slug: "maximum-subarray", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Array", "Divide and Conquer", "Dynamic Programming", "Greedy"] },
  { title: "Jump Game", slug: "jump-game", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Array", "Dynamic Programming", "Greedy"] },
  { title: "Gas Station", slug: "gas-station", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Array", "Greedy"] },
  { title: "Partition Labels", slug: "partition-labels", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Hash Table", "Two Pointers", "String", "Greedy"] },
]);
