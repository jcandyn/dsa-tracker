import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const math = createProblemSet(TOPICS.MATH, PATTERNS.MATH, [
  { title: "Palindrome Number", slug: "palindrome-number", difficulty: DIFFICULTY.EASY, time: "O(log n)", space: "O(1)", tags: ["Math"] },
  { title: "Plus One", slug: "plus-one", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Array", "Math"] },
  { title: "Pow(x, n)", slug: "powx-n", difficulty: DIFFICULTY.MEDIUM, time: "O(log n)", space: "O(log n)", tags: ["Math", "Recursion"] , pattern: PATTERNS.RECURSION },
  { title: "Multiply Strings", slug: "multiply-strings", difficulty: DIFFICULTY.MEDIUM, time: "O(mn)", space: "O(m + n)", tags: ["Math", "String", "Simulation"] },
]);
