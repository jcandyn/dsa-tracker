import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useProblemStore } from "@/store/problemStore";
import ProblemDrawer from "./components/ProblemDrawer";
import ProblemTable from "./components/ProblemTable";

const ProblemsPage = () => {
  const problems = useProblemStore((state) => state.problems);
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId);
  const selectProblem = useProblemStore((state) => state.selectProblem);
  const [searchParams] = useSearchParams();
  const problemToOpen = searchParams.get("open");
  const openedFromUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!problemToOpen) {
      if (openedFromUrl.current) selectProblem(null);
      openedFromUrl.current = null;
      return;
    }

    if (openedFromUrl.current === problemToOpen) return;

    if (problemToOpen !== selectedProblemId && problems.some((problem) => problem.id === problemToOpen)) {
      openedFromUrl.current = problemToOpen;
      selectProblem(problemToOpen);
    }
  }, [problemToOpen, problems, selectedProblemId, selectProblem]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          💻 Problems
        </h1>

        <p className="mt-2 text-slate-400">
          {problems.length} problems loaded
        </p>
      </div>

      <ProblemTable />
      <ProblemDrawer />
    </div>
  );
};

export default ProblemsPage;
