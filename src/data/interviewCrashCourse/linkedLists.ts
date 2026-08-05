import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const linkedLists = createProblemSet(TOPICS.LINKED_LIST, PATTERNS.FAST_SLOW_POINTER, [
  { title: "Reverse Linked List", slug: "reverse-linked-list", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Linked List", "Recursion"] },
  { title: "Merge Two Sorted Lists", slug: "merge-two-sorted-lists", difficulty: DIFFICULTY.EASY, time: "O(n + m)", space: "O(1)", tags: ["Linked List", "Recursion"] },
  { title: "Linked List Cycle", slug: "linked-list-cycle", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Linked List", "Two Pointers"] },
  { title: "Reorder List", slug: "reorder-list", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Linked List", "Two Pointers", "Stack"] },
  { title: "Copy List with Random Pointer", slug: "copy-list-with-random-pointer", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Hash Table", "Linked List"] },
]);
