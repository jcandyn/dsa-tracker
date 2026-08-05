import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const backtracking = createProblemSet(TOPICS.BACKTRACKING, PATTERNS.BACKTRACKING, [
  { title: "Subsets", slug: "subsets", difficulty: DIFFICULTY.MEDIUM, time: "O(n * 2^n)", space: "O(n)", tags: ["Array", "Backtracking", "Bit Manipulation"] },
  { title: "Combination Sum", slug: "combination-sum", difficulty: DIFFICULTY.MEDIUM, time: "O(n^(target/min))", space: "O(target/min)", tags: ["Array", "Backtracking"] },
  { title: "Permutations", slug: "permutations", difficulty: DIFFICULTY.MEDIUM, time: "O(n * n!)", space: "O(n)", tags: ["Array", "Backtracking"] },
  { title: "Word Search", slug: "word-search", difficulty: DIFFICULTY.MEDIUM, time: "O(mn * 4^L)", space: "O(L)", tags: ["Array", "String", "Backtracking", "Matrix"] },
  { title: "N-Queens", slug: "n-queens", difficulty: DIFFICULTY.HARD, time: "O(n!)", space: "O(n)", tags: ["Array", "Backtracking"] },
]);
