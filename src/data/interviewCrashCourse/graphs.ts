import { PATTERNS, TOPICS } from "@/constants";
import { createProblemSet, DIFFICULTY } from "./utils";

export const graphs = createProblemSet(TOPICS.GRAPHS, PATTERNS.BFS, [
  { title: "Number of Islands", slug: "number-of-islands", difficulty: DIFFICULTY.MEDIUM, time: "O(mn)", space: "O(mn)", tags: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find"], pattern: PATTERNS.DFS },
  { title: "Clone Graph", slug: "clone-graph", difficulty: DIFFICULTY.MEDIUM, time: "O(V + E)", space: "O(V)", tags: ["Hash Table", "Depth-First Search", "Breadth-First Search", "Graph"] },
  { title: "Course Schedule", slug: "course-schedule", difficulty: DIFFICULTY.MEDIUM, time: "O(V + E)", space: "O(V + E)", tags: ["Depth-First Search", "Breadth-First Search", "Graph", "Topological Sort"], pattern: PATTERNS.TOPOLOGICAL_SORT },
  { title: "Rotting Oranges", slug: "rotting-oranges", difficulty: DIFFICULTY.MEDIUM, time: "O(mn)", space: "O(mn)", tags: ["Array", "Breadth-First Search", "Matrix"] },
  { title: "Pacific Atlantic Water Flow", slug: "pacific-atlantic-water-flow", difficulty: DIFFICULTY.MEDIUM, time: "O(mn)", space: "O(mn)", tags: ["Array", "Depth-First Search", "Breadth-First Search", "Matrix"] },
]);
