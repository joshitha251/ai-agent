import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, FileText } from "lucide-react";
import { getMockLeadById } from "../services/mockData.js";

const priorityStyles = {
  High: "bg-red-500/10 text-red-400 border-red-500/20",
  Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Low: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
};

export default function LeadDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lead = getMockLeadById(id);

  if (!lead) {
    return (
      <div className="bg-surface border border-border rounded-xl p-10 text-center">
        <p className="text-zinc-400 mb-4">Lead not found.</p>
        <button
          onClick={() => navigate("/leads")}
          className="text-primary text-sm font-medium"
        >
          Back to Leads
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate("/leads")}
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Leads
      </button>

      <div className="bg-surface border border-border rounded-xl p-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">
              {lead.company}
            </h2>
            <a
              href={`https://${lead.website}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              <Globe size={14} />
              {lead.website}
            </a>
          </div>

          <span
            className={`inline-flex px-3 py-1.5 rounded-full text-xs font-medium border ${priorityStyles[lead.priority]}`}
          >
            {lead.priority} Priority
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-xs text-zinc-400 mb-1">Lead Score</p>
            <p className="text-lg font-semibold text-white">
              {lead.leadScore}
            </p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-xs text-zinc-400 mb-1">Industry</p>
            <p className="text-lg font-semibold text-white">
              {lead.industry}
            </p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="text-xs text-zinc-400 mb-1">Estimated Savings</p>
            <p className="text-lg font-semibold text-white">
              {lead.estimatedSavings}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Summary</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {lead.summary}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-2">
              Pain Points
            </h3>
            <ul className="space-y-1.5">
              {lead.painPoints.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-zinc-400 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-2">
              Automation Opportunities
            </h3>
            <ul className="space-y-1.5">
              {lead.automationOpportunities.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-zinc-400 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <button className="inline-flex items-center gap-2 bg-primary text-background font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
            <FileText size={16} />
            Generate Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
