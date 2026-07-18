import LeadTable from "../components/LeadTable.jsx";
import { mockLeads } from "../services/mockData.js";

export default function Leads() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          {mockLeads.length} leads found
        </p>
      </div>

      <LeadTable leads={mockLeads} />
    </div>
  );
}
