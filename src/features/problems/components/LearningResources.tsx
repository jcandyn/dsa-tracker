import { BookOpen, ExternalLink, MessageSquare, PlayCircle } from "lucide-react";

interface Props {
  title: string;
  url: string;
}

const LearningResources = ({ title, url }: Props) => {
  const problemUrl = url.endsWith("/") ? url : `${url}/`;
  const query = encodeURIComponent(`${title} LeetCode walkthrough explanation`);
  const discussionQuery = encodeURIComponent(title);
  const resources = [
    { label: "Problem statement", description: "Re-read constraints and examples.", href: problemUrl, icon: BookOpen },
    { label: "Official editorial", description: "Study the intended solution approach.", href: `${problemUrl}editorial/`, icon: ExternalLink },
    { label: "Community discussion", description: "Compare alternative explanations.", href: `https://leetcode.com/discuss/?currentPage=1&orderBy=most_relevant&query=${discussionQuery}`, icon: MessageSquare },
    { label: "Video walkthroughs", description: "Search YouTube for visual explanations.", href: `https://www.youtube.com/results?search_query=${query}`, icon: PlayCircle },
  ];

  return <section className="rounded-xl border border-violet-200 bg-violet-50 p-5 dark:border-slate-800 dark:bg-slate-900">
    <h3 className="text-xl font-semibold text-violet-900 dark:text-white">Keep learning</h3>
    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Explore explanations after you have attempted the problem yourself.</p>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">{resources.map(({ label, description, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" className="group rounded-lg border border-violet-200 bg-white p-3 transition hover:border-violet-400 hover:shadow-sm dark:border-slate-700 dark:bg-slate-950"><div className="flex items-center gap-2 font-medium text-violet-800 dark:text-violet-300"><Icon size={16} />{label}<ExternalLink size={13} className="ml-auto opacity-0 transition group-hover:opacity-100" /></div><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{description}</p></a>)}</div>
  </section>;
};

export default LearningResources;
