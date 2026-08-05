import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const binarySearch = createProblemSet(TOPICS.BINARY_SEARCH, PATTERNS.BINARY_SEARCH, [
  { title: "Binary Search", slug: "binary-search", difficulty: DIFFICULTY.EASY, time: "O(log n)", space: "O(1)", tags: ["Array", "Binary Search"] },
  { title: "Search in Rotated Sorted Array", slug: "search-in-rotated-sorted-array", difficulty: DIFFICULTY.MEDIUM, time: "O(log n)", space: "O(1)", tags: ["Array", "Binary Search"] },
  { title: "Find Minimum in Rotated Sorted Array", slug: "find-minimum-in-rotated-sorted-array", difficulty: DIFFICULTY.MEDIUM, time: "O(log n)", space: "O(1)", tags: ["Array", "Binary Search"] },
  { title: "Koko Eating Bananas", slug: "koko-eating-bananas", difficulty: DIFFICULTY.MEDIUM, time: "O(n log m)", space: "O(1)", tags: ["Array", "Binary Search"] },
]);
