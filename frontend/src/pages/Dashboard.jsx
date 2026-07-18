import { useState } from "react";
import { Users, Flame, CalendarCheck, DollarSign } from "lucide-react";
import StatCard from "../components/StatCard.jsx";
import SearchForm from "../components/SearchForm.jsx";
import LeadTable from "../components/LeadTable.jsx";
import { mockStats, mockLeads } from "../services/mockData.js";

export default function Dashboard() {
  const [searching, setSearching] = useState(false);

  function handleSearch(params) {
    setSearching(true);
    // Placeholder: wire this to services/api.js searchBusinesses() later
    setTimeout(() => setSearching(false), 1000);
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Leads" value={mockStats.totalLeads} icon={Users} />
        <StatCard
          label="High Priority"
          value={mockStats.highPriority}
          icon={Flame}
        />
        <StatCard
          label="Meetings"
          value={mockStats.meetings}
          icon={CalendarCheck}
        />
        <StatCard
          label="Revenue Potential"
          value={mockStats.revenuePotential}
          icon={DollarSign}
        />
      </div>

      <SearchForm onSearch={handleSearch} loading={searching} />

      <div>
        <h2 className="text-white font-semibold mb-3">Recent Leads</h2>
        <LeadTable leads={mockLeads.slice(0, 5)} />
      </div>
    </div>
  );
}
