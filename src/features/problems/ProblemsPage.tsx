import { useProblemStore } from "@/store/problemStore";
import ProblemDrawer from "./components/ProblemDrawer";
import ProblemTable from "./components/ProblemTable";

const ProblemsPage = () => {
  const problems = useProblemStore((state) => state.problems);

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