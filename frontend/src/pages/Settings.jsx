import { useState } from "react";

export default function Settings() {
  const [backendUrl, setBackendUrl] = useState("http://localhost:8000");
  const [companyName, setCompanyName] = useState("PrimeAgents");
  const [theme, setTheme] = useState("Dark");

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="bg-surface border border-border rounded-xl p-6">
        <h2 className="text-white font-semibold mb-1">Backend URL</h2>
        <p className="text-sm text-zinc-400 mb-4">
          The API endpoint your dashboard connects to.
        </p>
        <input
          type="text"
          value={backendUrl}
          onChange={(e) => setBackendUrl(e.target.value)}
          className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-white focus:border-primary/60 transition-colors"
        />
      </div>

      <div className="bg-surface border border-border rounded-xl p-6">
        <h2 className="text-white font-semibold mb-1">Theme</h2>
        <p className="text-sm text-zinc-400 mb-4">
          Choose how PrimeAgents looks on your device.
        </p>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-white focus:border-primary/60 transition-colors"
        >
          <option>Dark</option>
          <option>Light</option>
        </select>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6">
        <h2 className="text-white font-semibold mb-1">Company Name</h2>
        <p className="text-sm text-zinc-400 mb-4">
          Used on proposals and outbound communication.
        </p>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-white focus:border-primary/60 transition-colors"
        />
      </div>

      <button className="bg-primary text-background font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
        Save Changes
      </button>
    </div>
  );
}
