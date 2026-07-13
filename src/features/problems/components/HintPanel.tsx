import { useState } from "react";

interface Props {
  hints: string[];
  pattern: string;
  expectedTime: string;
  expectedSpace: string;
}

const HintPanel = ({
  hints,
  pattern,
  expectedTime,
  expectedSpace,
}: Props) => {
  const [step, setStep] = useState(0);

  const reveal = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">

      <h3 className="mb-5 text-xl font-semibold">
        🧩 Hints
      </h3>

      <div className="space-y-5">

        {hints.map((hint, index) => (
          <div
            key={index}
            className="rounded-lg border border-slate-800 bg-slate-950 p-4"
          >
            <div className="mb-2 flex items-center justify-between">

              <p className="font-semibold">
                Hint {index + 1}
              </p>

              {step > index ? (
                <span className="text-green-400">
                  ✓
                </span>
              ) : (
                <span className="text-slate-500">
                  🔒
                </span>
              )}

            </div>

            {step > index ? (
              <p className="text-slate-300">
                {hint}
              </p>
            ) : (
              <button
                disabled={step !== index}
                onClick={reveal}
                className={`rounded-lg px-4 py-2 text-sm transition ${
                  step === index
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "cursor-not-allowed bg-slate-800 text-slate-500"
                }`}
              >
                Reveal Hint
              </button>
            )}

          </div>
        ))}

        {/* Pattern */}

        <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">

          <div className="mb-2 flex justify-between">

            <p className="font-semibold">
              🧠 Pattern
            </p>

            {step >= hints.length + 1 ? (
              <span className="text-green-400">
                ✓
              </span>
            ) : (
              <span className="text-slate-500">
                🔒
              </span>
            )}

          </div>

          {step >= hints.length + 1 ? (
            <p>{pattern}</p>
          ) : (
            <button
              disabled={step !== hints.length}
              onClick={reveal}
              className={`rounded-lg px-4 py-2 text-sm transition ${
                step === hints.length
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "cursor-not-allowed bg-slate-800 text-slate-500"
              }`}
            >
              Reveal Pattern
            </button>
          )}

        </div>

        {/* Complexity */}

        <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">

          <div className="mb-2 flex justify-between">

            <p className="font-semibold">
              ⚡ Complexity
            </p>

            {step >= hints.length + 2 ? (
              <span className="text-green-400">
                ✓
              </span>
            ) : (
              <span className="text-slate-500">
                🔒
              </span>
            )}

          </div>

          {step >= hints.length + 2 ? (
            <div className="space-y-2">

              <div className="flex justify-between">
                <span>Time</span>
                <span className="font-mono">
                  {expectedTime}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Space</span>
                <span className="font-mono">
                  {expectedSpace}
                </span>
              </div>

            </div>
          ) : (
            <button
              disabled={step !== hints.length + 1}
              onClick={reveal}
              className={`rounded-lg px-4 py-2 text-sm transition ${
                step === hints.length + 1
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "cursor-not-allowed bg-slate-800 text-slate-500"
              }`}
            >
              Reveal Complexity
            </button>
          )}

        </div>

      </div>

    </section>
  );
};

export default HintPanel;