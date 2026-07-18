import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const priorityStyles = {
  High: "bg-red-500/10 text-red-400 border-red-500/20",
  Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Low: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
};

const statusStyles = {
  New: "bg-primary/10 text-primary border-primary/20",
  Contacted: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Qualified: "bg-green-500/10 text-green-400 border-green-500/20"
};

export default function LeadTable({ leads }) {
  const navigate = useNavigate();

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-zinc-400">
              <th className="px-5 py-3 font-medium">Company</th>
              <th className="px-5 py-3 font-medium">Industry</th>
              <th className="px-5 py-3 font-medium">Lead Score</th>
              <th className="px-5 py-3 font-medium">Priority</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b border-border last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-5 py-4 text-white font-medium">
                  {lead.company}
                </td>
                <td className="px-5 py-4 text-zinc-400">{lead.industry}</td>
                <td className="px-5 py-4 text-zinc-300">{lead.leadScore}</td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${priorityStyles[lead.priority]}`}
                  >
                    {lead.priority}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyles[lead.status]}`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => navigate(`/leads/${lead.id}`)}
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                  >
                    View
                    <ArrowRight size={14} />
                  </button>
                </td>
              </tr>
            ))}

            {leads.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-zinc-500">
                  No leads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
