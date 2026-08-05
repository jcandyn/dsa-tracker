import { DIFFICULTY } from "@/constants/difficulty";
import type { Pattern } from "@/constants/patterns";
import type { Topic } from "@/constants/topics";
import type { ProblemTemplate } from "@/types/problemTemplate";

type CourseProblem = {
  title: string;
  slug: string;
  difficulty: ProblemTemplate["difficulty"];
  time: string;
  space: string;
  tags: string[];
  pattern?: Pattern;
};

export const createProblemSet = (
  topic: Topic,
  defaultPattern: Pattern,
  problems: CourseProblem[],
): ProblemTemplate[] => problems.map((problem) => ({
  ...problem,
  url: `https://leetcode.com/problems/${problem.slug}/`,
  topic,
  pattern: problem.pattern ?? defaultPattern,
  expectedTimeComplexity: problem.time,
  expectedSpaceComplexity: problem.space,
  companies: ["Amazon", "Google", "Meta"],
  hints: [
    `Identify the invariant that makes ${problem.title} manageable.`,
    "Choose a data structure that avoids repeating work.",
    `Use the stated ${problem.pattern ?? defaultPattern} pattern to reach the target complexity.`,
  ],
  commonMistakes: [
    "Missing edge cases such as empty input, duplicate values, or a single element.",
    "Using a brute-force solution when the intended pattern can reuse previous work.",
  ],
  followUps: ["Can you reduce the extra space or handle a streaming input?"],
  relatedProblems: [],
}));

export { DIFFICULTY };
