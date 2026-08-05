import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const heaps = createProblemSet(TOPICS.HEAP, PATTERNS.HEAP, [
  { title: "Kth Largest Element in an Array", slug: "kth-largest-element-in-an-array", difficulty: DIFFICULTY.MEDIUM, time: "O(n log k)", space: "O(k)", tags: ["Array", "Divide and Conquer", "Sorting", "Heap"] },
  { title: "Last Stone Weight", slug: "last-stone-weight", difficulty: DIFFICULTY.EASY, time: "O(n log n)", space: "O(n)", tags: ["Array", "Heap"] },
  { title: "K Closest Points to Origin", slug: "k-closest-points-to-origin", difficulty: DIFFICULTY.MEDIUM, time: "O(n log k)", space: "O(k)", tags: ["Array", "Math", "Heap"] },
  { title: "Task Scheduler", slug: "task-scheduler", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(1)", tags: ["Array", "Hash Table", "Greedy", "Heap"] },
]);
