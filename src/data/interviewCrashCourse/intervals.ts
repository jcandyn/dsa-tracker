import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const intervals = createProblemSet(TOPICS.INTERVALS, PATTERNS.SORTING, [
  { title: "Merge Intervals", slug: "merge-intervals", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(n)", tags: ["Array", "Sorting", "Intervals"] },
  { title: "Insert Interval", slug: "insert-interval", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Array", "Intervals"] },
  { title: "Non-overlapping Intervals", slug: "non-overlapping-intervals", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(1)", tags: ["Array", "Dynamic Programming", "Greedy", "Sorting"] , pattern: PATTERNS.GREEDY },
  { title: "Meeting Rooms II", slug: "meeting-rooms-ii", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(n)", tags: ["Array", "Two Pointers", "Greedy", "Sorting", "Heap"] , pattern: PATTERNS.HEAP },
]);
