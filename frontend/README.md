# PrimeAgents Frontend

Dashboard UI for the PrimeAgents AI Sales Agent. Built with React, Vite, and Tailwind CSS. Currently wired to mock data — connect `src/services/api.js` to your FastAPI backend when ready.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/components` — Sidebar, Header, StatCard, LeadTable, SearchForm
- `src/pages` — Dashboard, Leads, LeadDetails, Settings
- `src/services/api.js` — fetch-based API functions (searchBusinesses, analyzeBusiness, getLeads, getLead, generateProposal)
- `src/services/mockData.js` — mock leads/stats used until the backend is connected
