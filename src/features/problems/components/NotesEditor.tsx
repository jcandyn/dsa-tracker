import { memo, useEffect, useState } from "react";
import { useProblemStore } from "@/store/problemStore";

interface Props {
  problemId: string;
  notes: string;
}

const NotesEditor = memo(({ problemId, notes }: Props) => {
  const [draft, setDraft] = useState(notes);
  const updateNotes = useProblemStore((state) => state.updateNotes);

  useEffect(() => setDraft(notes), [notes, problemId]);

  return <textarea
    placeholder="Write your thoughts, solution ideas, common mistakes..."
    className="h-40 w-full rounded-xl border border-slate-800 bg-slate-900 p-4 outline-none focus:border-sky-500"
    value={draft}
    onChange={(event) => setDraft(event.target.value)}
    onBlur={() => { if (draft !== notes) updateNotes(problemId, draft); }}
  />;
});

export default NotesEditor;
