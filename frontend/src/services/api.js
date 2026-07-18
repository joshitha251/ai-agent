const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export function searchBusinesses({ keyword, location, limit }) {
  return request("/api/search", {
    method: "POST",
    body: JSON.stringify({ keyword, location, limit })
  });
}

export function analyzeBusiness(businessId) {
  return request(`/api/analyze/${businessId}`, {
    method: "POST"
  });
}

export function getLeads() {
  return request("/api/leads");
}

export function getLead(leadId) {
  return request(`/api/leads/${leadId}`);
}

export function generateProposal(leadId) {
  return request(`/api/leads/${leadId}/proposal`, {
    method: "POST"
  });
}
