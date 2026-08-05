import type { Difficulty, Pattern, Topic } from "@/constants";

export interface ProblemTemplate {
  title: string;

  slug: string;

  url: string;

  difficulty: Difficulty;

  topic: Topic;

  pattern: Pattern;

  expectedTimeComplexity: string;

  expectedSpaceComplexity: string;

  companies: string[];

  tags: string[];

  hints: string[];

  commonMistakes: string[];

  followUps: string[];

  relatedProblems: string[];
}
