export const TOPICS = {
  ARRAYS_STRINGS: {
    id: "arrays-strings",
    label: "Arrays & Strings",
    icon: "📦",
    color: "emerald",
  },
  HASHING: {
    id: "hashing",
    label: "Hashing",
    icon: "#️⃣",
    color: "sky",
  },
  TWO_POINTERS: {
    id: "two-pointers",
    label: "Two Pointers",
    icon: "👉👈",
    color: "cyan",
  },
  BINARY_SEARCH: {
    id: "binary-search",
    label: "Binary Search",
    icon: "🔎",
    color: "blue",
  },
  SLIDING_WINDOW: {
    id: "sliding-window",
    label: "Sliding Window",
    icon: "🪟",
    color: "blue",
  },
  STACK: {
    id: "stack",
    label: "Stack",
    icon: "📚",
    color: "orange",
  },
  QUEUE: {
    id: "queue",
    label: "Queue",
    icon: "🚶",
    color: "amber",
  },
  LINKED_LIST: {
    id: "linked-list",
    label: "Linked List",
    icon: "🔗",
    color: "lime",
  },
  TREES: {
    id: "trees",
    label: "Trees",
    icon: "🌳",
    color: "green",
  },
  BST: {
    id: "bst",
    label: "Binary Search Tree",
    icon: "🌲",
    color: "teal",
  },
  HEAP: {
    id: "heap",
    label: "Heap / Priority Queue",
    icon: "⛰️",
    color: "yellow",
  },
  GRAPHS: {
    id: "graphs",
    label: "Graphs",
    icon: "🕸️",
    color: "violet",
  },
  TRIE: {
    id: "trie",
    label: "Trie",
    icon: "🌿",
    color: "purple",
  },
  BACKTRACKING: {
    id: "backtracking",
    label: "Backtracking",
    icon: "↩️",
    color: "pink",
  },
  DP: {
    id: "dynamic-programming",
    label: "Dynamic Programming",
    icon: "🧠",
    color: "rose",
  },
  GREEDY: {
    id: "greedy",
    label: "Greedy",
    icon: "💰",
    color: "red",
  },
  MATH: {
    id: "math",
    label: "Math",
    icon: "➗",
    color: "fuchsia",
  },
  INTERVALS: {
    id: "intervals",
    label: "Intervals",
    icon: "📏",
    color: "indigo",
  },
} as const;

export type Topic = (typeof TOPICS)[keyof typeof TOPICS];
