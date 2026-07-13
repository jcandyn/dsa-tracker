import type { Platform, Status } from "@/constants";
import type { ProblemTemplate } from "./problemTemplate";

export interface Problem extends ProblemTemplate {
  id: string;

  platform: Platform;

  status: Status;

  confidence: 1 | 2 | 3 | 4 | 5;

  completed: boolean;

  attempts: number;

  usedHint: boolean;

  notes: string;

  solutionUrl?: string;

  timeSpent?: number;

  createdAt: string;

  updatedAt: string;

  lastReviewed?: string;

  nextReview?: string;
}