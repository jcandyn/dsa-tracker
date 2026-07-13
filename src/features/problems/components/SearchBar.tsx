interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="🔍 Search problems..."
      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 outline-none focus:border-sky-500"
    />
  );
};

export default SearchBar;