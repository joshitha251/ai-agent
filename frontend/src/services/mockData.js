export const mockStats = {
  totalLeads: 248,
  highPriority: 37,
  meetings: 12,
  revenuePotential: "$482,300"
};

export const mockLeads = [
  {
    id: "1",
    company: "Brightline Logistics",
    industry: "Transportation",
    website: "brightlinelogistics.com",
    leadScore: 92,
    priority: "High",
    status: "New",
    summary:
      "Regional freight carrier managing dispatch manually across three offices, causing delayed customer updates and scheduling overlap.",
    painPoints: [
      "Manual dispatch coordination across offices",
      "No automated customer notifications",
      "Delayed invoice processing"
    ],
    automationOpportunities: [
      "AI dispatch assistant for route coordination",
      "Automated SMS/email delivery updates",
      "Invoice generation on delivery confirmation"
    ],
    estimatedSavings: "$86,000 / year"
  },
  {
    id: "2",
    company: "Northgate Dental Group",
    industry: "Healthcare",
    website: "northgatedental.com",
    leadScore: 78,
    priority: "Medium",
    status: "Contacted",
    summary:
      "Multi-location dental practice losing appointment bookings due to slow phone response times during peak hours.",
    painPoints: [
      "High call volume during peak hours",
      "Missed appointment reminders",
      "Manual patient intake forms"
    ],
    automationOpportunities: [
      "AI voice agent for appointment booking",
      "Automated reminder sequences",
      "Digital intake form automation"
    ],
    estimatedSavings: "$41,500 / year"
  },
  {
    id: "3",
    company: "Ferro & Stone Legal",
    industry: "Legal Services",
    website: "ferrostonelaw.com",
    leadScore: 65,
    priority: "Medium",
    status: "New",
    summary:
      "Boutique law firm spending significant partner hours on initial client intake and case qualification.",
    painPoints: [
      "Partners handling unqualified leads",
      "No structured intake process",
      "Slow follow-up on inquiries"
    ],
    automationOpportunities: [
      "AI intake qualification agent",
      "Automated follow-up sequencing",
      "Case document pre-fill"
    ],
    estimatedSavings: "$58,200 / year"
  },
  {
    id: "4",
    company: "Coastal Realty Partners",
    industry: "Real Estate",
    website: "coastalrealtypartners.com",
    leadScore: 88,
    priority: "High",
    status: "Qualified",
    summary:
      "Growing brokerage struggling to respond to inbound listing inquiries fast enough, losing leads to competitors.",
    painPoints: [
      "Slow response to listing inquiries",
      "No lead scoring system",
      "Agents manually tracking follow-ups"
    ],
    automationOpportunities: [
      "AI chat agent for instant inquiry response",
      "Automated lead scoring and routing",
      "Follow-up task automation for agents"
    ],
    estimatedSavings: "$94,700 / year"
  },
  {
    id: "5",
    company: "Vantage Fitness Studios",
    industry: "Health & Wellness",
    website: "vantagefitness.com",
    leadScore: 54,
    priority: "Low",
    status: "New",
    summary:
      "Boutique fitness chain with inconsistent membership renewal follow-up leading to higher-than-average churn.",
    painPoints: [
      "Inconsistent renewal reminders",
      "No churn prediction process",
      "Manual membership upsell outreach"
    ],
    automationOpportunities: [
      "Automated renewal reminder sequences",
      "AI churn-risk flagging",
      "Personalized upsell messaging"
    ],
    estimatedSavings: "$23,900 / year"
  },
  {
    id: "6",
    company: "Ironclad Manufacturing",
    industry: "Manufacturing",
    website: "ironcladmfg.com",
    leadScore: 81,
    priority: "High",
    status: "Contacted",
    summary:
      "Mid-size manufacturer fielding a high volume of repetitive supplier and order-status inquiries via email.",
    painPoints: [
      "High volume of repetitive email inquiries",
      "Slow order-status responses",
      "No centralized inquiry tracking"
    ],
    automationOpportunities: [
      "AI email agent for order-status responses",
      "Centralized inquiry dashboard",
      "Automated supplier update summaries"
    ],
    estimatedSavings: "$67,300 / year"
  }
];

export function getMockLeadById(id) {
  return mockLeads.find((lead) => lead.id === id);
}
