import type {
  Difficulty,
  Pattern,
  Platform,
  Status,
  Topic,
} from "../constants";
import type { Course } from "../constants/courses";

export interface Problem {
  // Identity
  id: string;
  title: string;

  // Source
  platform: Platform;
  course: Course;

  // Classification
  topic: Topic;
  pattern: Pattern;
  difficulty: Difficulty;

  // Progress
  status: Status;
  completed: boolean;
  confidence: 1 | 2 | 3 | 4 | 5;

  // Solving
  attempts: number;
  timeSpent?: number; // minutes
  usedHint: boolean;

  // Complexity
  timeComplexity?: string;
  spaceComplexity?: string;

  // Resources
  solutionUrl?: string;
  notes: string;

  // Review
  lastReviewed?: string;
  nextReview?: string;

  // Metadata
  createdAt: string;
  updatedAt: string;
}