import { DIFFICULTY } from "../../constants/difficulty";
import { PATTERNS } from "../../constants/patterns";
import { TOPICS } from "../../constants/topics";

export const arraysStrings: ProblemTemplate[] = [
  {
    title: "Contains Duplicate",
    slug: "contains-duplicate",
    url: "https://leetcode.com/problems/contains-duplicate/",

    difficulty: DIFFICULTY.EASY,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.HASH_SET,

    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",

    companies: ["Amazon", "Google", "Meta"],

    tags: [
      "Array",
      "Hash Table",
    ],

    hints: [
      "Can you remember numbers you've already seen?",
      "Think about a data structure with constant-time lookups.",
      "Try keeping track of previously visited values.",
      "A Hash Set leads to an O(n) solution.",
    ],

    commonMistakes: [
      "Using nested loops results in O(n²).",
      "Sorting works but isn't the optimal approach.",
    ],

    followUps: [
      "Can you solve it in O(n) time?",
    ],

    relatedProblems: [
      "Two Sum",
      "Longest Consecutive Sequence",
      "Valid Sudoku",
    ],
  },

  {
    title: "Valid Anagram",
    slug: "valid-anagram",
    url: "https://leetcode.com/problems/valid-anagram/",

    difficulty: DIFFICULTY.EASY,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.HASH_MAP,

    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",

    companies: [
      "Amazon",
      "Apple",
      "Meta",
    ],

    tags: [
      "String",
      "Hash Table",
    ],

    hints: [
      "Both strings should contain the same characters.",
      "Think about counting character frequencies.",
      "Can you compare two frequency maps?",
      "A Hash Map (or array of counts) solves this efficiently.",
    ],

    commonMistakes: [
      "Sorting is acceptable but not always optimal.",
      "Don't forget to compare lengths first.",
    ],

    followUps: [
      "Can you solve it without sorting?",
    ],

    relatedProblems: [
      "Group Anagrams",
      "Find All Anagrams in a String",
    ],
  },

  {
    title: "Two Sum",
    slug: "two-sum",
    url: "https://leetcode.com/problems/two-sum/",

    difficulty: DIFFICULTY.EASY,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.HASH_MAP,

    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",

    companies: [
      "Amazon",
      "Google",
      "Microsoft",
    ],

    tags: [
      "Array",
      "Hash Table",
    ],

    hints: [
      "For each number, what value are you missing?",
      "Can you remember numbers you've already processed?",
      "Look up the complement instead of searching the whole array.",
      "A Hash Map gives an O(n) solution.",
    ],

    commonMistakes: [
      "Using nested loops gives O(n²).",
      "Be careful not to reuse the same index twice.",
    ],

    followUps: [
      "What if the array were already sorted?",
    ],

    relatedProblems: [
      "Two Sum II",
      "3Sum",
      "4Sum",
    ],
  },
    {
    title: "Group Anagrams",
    slug: "group-anagrams",
    url: "https://leetcode.com/problems/group-anagrams/",

    difficulty: DIFFICULTY.MEDIUM,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.HASH_MAP,

    expectedTimeComplexity: "O(n × k log k)",
    expectedSpaceComplexity: "O(nk)",

    companies: [
      "Amazon",
      "Meta",
      "Uber",
    ],

    tags: [
      "Hash Table",
      "Sorting",
      "String",
    ],

    hints: [
      "Anagrams share the exact same character counts.",
      "Can you create a unique identifier for each word?",
      "Think about grouping words with identical signatures.",
      "Sorted strings or character frequency counts work as keys.",
    ],

    commonMistakes: [
      "Forgetting that different words can have the same sorted representation.",
      "Using mutable objects as map keys.",
    ],

    followUps: [
      "Can you avoid sorting every string?",
    ],

    relatedProblems: [
      "Valid Anagram",
      "Find All Anagrams in a String",
      "Encode and Decode Strings",
    ],
  },

  {
    title: "Top K Frequent Elements",
    slug: "top-k-frequent-elements",
    url: "https://leetcode.com/problems/top-k-frequent-elements/",

    difficulty: DIFFICULTY.MEDIUM,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.BUCKET_SORT,

    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",

    companies: [
      "Amazon",
      "Google",
      "Meta",
    ],

    tags: [
      "Bucket Sort",
      "Hash Table",
      "Heap",
    ],

    hints: [
      "Start by counting how often each value appears.",
      "Do you really need to sort every frequency?",
      "Think about grouping numbers by frequency.",
      "Bucket Sort gives a linear-time solution.",
    ],

    commonMistakes: [
      "Sorting frequencies when a linear solution exists.",
      "Returning frequencies instead of numbers.",
    ],

    followUps: [
      "Can you solve it faster than O(n log n)?",
    ],

    relatedProblems: [
      "K Closest Points to Origin",
      "Sort Characters By Frequency",
      "Contains Duplicate",
    ],
  },

  {
    title: "Product of Array Except Self",
    slug: "product-of-array-except-self",
    url: "https://leetcode.com/problems/product-of-array-except-self/",

    difficulty: DIFFICULTY.MEDIUM,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.PREFIX_SUFFIX,

    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",

    companies: [
      "Amazon",
      "Apple",
      "Microsoft",
    ],

    tags: [
      "Prefix Sum",
      "Array",
    ],

    hints: [
      "Can you compute everything to the left of each index?",
      "Now think about everything to the right.",
      "Can both passes be combined?",
      "Prefix and suffix products avoid division entirely.",
    ],

    commonMistakes: [
      "Using division when it's explicitly disallowed.",
      "Allocating unnecessary extra arrays.",
    ],

    followUps: [
      "Can you solve it using only constant extra space?",
    ],

    relatedProblems: [
      "Trapping Rain Water",
      "Maximum Product Subarray",
      "Maximum Subarray",
    ],
  },
    {
    title: "Longest Consecutive Sequence",
    slug: "longest-consecutive-sequence",
    url: "https://leetcode.com/problems/longest-consecutive-sequence/",

    difficulty: DIFFICULTY.MEDIUM,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.HASH_SET,

    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",

    companies: [
      "Google",
      "Amazon",
      "Meta",
    ],

    tags: [
      "Array",
      "Hash Set",
    ],

    hints: [
      "Sorting works, but can you do better?",
      "Think about checking whether a number starts a sequence.",
      "Avoid recounting the same sequence multiple times.",
      "A Hash Set enables an O(n) solution.",
    ],

    commonMistakes: [
      "Sorting the array first.",
      "Starting from every number instead of only sequence starts.",
    ],

    followUps: [
      "Can you solve it in linear time?",
    ],

    relatedProblems: [
      "Contains Duplicate",
      "Longest Increasing Subsequence",
      "Number of Islands",
    ],
  },

  {
    title: "Encode and Decode Strings",
    slug: "encode-and-decode-strings",
    url: "https://neetcode.io/problems/string-encode-and-decode",

    difficulty: DIFFICULTY.MEDIUM,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.STRING_ENCODING,

    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",

    companies: [
      "Google",
      "Meta",
    ],

    tags: [
      "Design",
      "String",
    ],

    hints: [
      "How can you tell where one string ends?",
      "What if strings contain commas or special characters?",
      "Store the length before each string.",
      "Length-prefixed encoding avoids ambiguity.",
    ],

    commonMistakes: [
      "Using a delimiter that might appear in the input.",
      "Not handling empty strings.",
    ],

    followUps: [
      "How would you encode binary data?",
    ],

    relatedProblems: [
      "Group Anagrams",
      "Design TinyURL",
    ],
  },

  {
    title: "Valid Sudoku",
    slug: "valid-sudoku",
    url: "https://leetcode.com/problems/valid-sudoku/",

    difficulty: DIFFICULTY.MEDIUM,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.HASH_SET,

    expectedTimeComplexity: "O(1)",
    expectedSpaceComplexity: "O(1)",

    companies: [
      "Amazon",
      "Apple",
      "Meta",
    ],

    tags: [
      "Matrix",
      "Hash Table",
    ],

    hints: [
      "Rows, columns, and boxes all have the same rule.",
      "Can you validate each independently?",
      "How can you quickly detect duplicates?",
      "Three Hash Sets per number check works well.",
    ],

    commonMistakes: [
      "Checking only rows or columns.",
      "Incorrectly calculating the 3×3 sub-box index.",
    ],

    followUps: [
      "How would you solve an incomplete Sudoku board?",
    ],

    relatedProblems: [
      "Sudoku Solver",
      "Contains Duplicate",
    ],
  },
    {
    title: "Longest Common Prefix",
    slug: "longest-common-prefix",
    url: "https://leetcode.com/problems/longest-common-prefix/",

    difficulty: DIFFICULTY.EASY,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.STRING,

    expectedTimeComplexity: "O(n × m)",
    expectedSpaceComplexity: "O(1)",

    companies: [
      "Google",
      "Microsoft",
    ],

    tags: [
      "String",
    ],

    hints: [
      "Compare characters one position at a time.",
      "Stop as soon as one string differs.",
      "The shortest string limits the answer.",
      "Vertical scanning is a simple solution.",
    ],

    commonMistakes: [
      "Ignoring the shortest string.",
      "Accessing characters past a string's length.",
    ],

    followUps: [
      "Can you solve it using divide and conquer?",
    ],

    relatedProblems: [
      "Valid Anagram",
      "Implement Trie",
    ],
  },

  {
    title: "Merge Sorted Array",
    slug: "merge-sorted-array",
    url: "https://leetcode.com/problems/merge-sorted-array/",

    difficulty: DIFFICULTY.EASY,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.TWO_POINTERS,

    expectedTimeComplexity: "O(n + m)",
    expectedSpaceComplexity: "O(1)",

    companies: [
      "Amazon",
      "Meta",
    ],

    tags: [
      "Array",
      "Two Pointers",
    ],

    hints: [
      "Where is the extra space located?",
      "Would starting from the end help?",
      "Compare the largest remaining elements first.",
      "Two pointers from the back avoids overwriting values.",
    ],

    commonMistakes: [
      "Starting from the beginning.",
      "Overwriting values that haven't been compared yet.",
    ],

    followUps: [
      "How would you merge k sorted arrays?",
    ],

    relatedProblems: [
      "Merge Intervals",
      "Merge Two Sorted Lists",
    ],
  },

  {
    title: "Majority Element",
    slug: "majority-element",
    url: "https://leetcode.com/problems/majority-element/",

    difficulty: DIFFICULTY.EASY,
    topic: TOPICS.ARRAYS_STRINGS,
    pattern: PATTERNS.BOYER_MOORE,

    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",

    companies: [
      "Google",
      "Amazon",
    ],

    tags: [
      "Array",
      "Voting Algorithm",
    ],

    hints: [
      "One value appears more than half the time.",
      "Can different numbers cancel each other out?",
      "Keep track of a candidate and a counter.",
      "The Boyer-Moore Voting Algorithm solves it in O(1) space.",
    ],

    commonMistakes: [
      "Using unnecessary Hash Maps.",
      "Not understanding why the candidate survives cancellation.",
    ],

    followUps: [
      "What if no majority element is guaranteed?",
    ],

    relatedProblems: [
      "Majority Element II",
      "Top K Frequent Elements",
    ],
  },
];