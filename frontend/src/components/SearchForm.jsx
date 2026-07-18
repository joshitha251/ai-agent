import { useState } from "react";
import { Search, Loader2 } from "lucide-react";

export default function SearchForm({ onSearch, loading }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [limit, setLimit] = useState(10);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.({ keyword, location, limit });
  }

  return (
    <div className="bg-surface border border-border rounded-xl p-5">
      <h2 className="text-white font-semibold mb-4">Find New Leads</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end"
      >
        <div className="sm:col-span-2">
          <label className="block text-xs text-zinc-400 mb-1.5">
            Business / Keyword
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="e.g. dental clinics"
            className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-primary/60 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Austin, TX"
            className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-primary/60 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">Limit</label>
          <input
            type="number"
            min={1}
            max={100}
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-primary/60 transition-colors"
          />
        </div>

        <div className="sm:col-span-4">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-primary text-background font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Search size={16} />
            )}
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>
    </div>
  );
}
