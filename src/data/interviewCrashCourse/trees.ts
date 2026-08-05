import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const trees = createProblemSet(TOPICS.TREES, PATTERNS.DFS, [
  { title: "Maximum Depth of Binary Tree", slug: "maximum-depth-of-binary-tree", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(h)", tags: ["Tree", "Depth-First Search", "Breadth-First Search"] },
  { title: "Invert Binary Tree", slug: "invert-binary-tree", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(h)", tags: ["Tree", "Depth-First Search", "Breadth-First Search"] },
  { title: "Binary Tree Level Order Traversal", slug: "binary-tree-level-order-traversal", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Tree", "Breadth-First Search", "Binary Tree"], pattern: PATTERNS.BFS },
  { title: "Diameter of Binary Tree", slug: "diameter-of-binary-tree", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(h)", tags: ["Tree", "Depth-First Search", "Binary Tree"] },
  { title: "Lowest Common Ancestor of a Binary Tree", slug: "lowest-common-ancestor-of-a-binary-tree", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(h)", tags: ["Tree", "Depth-First Search", "Binary Tree"] },
]);
