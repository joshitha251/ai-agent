from services.gemini_services import client


class ProposalAgent:

    def generate(self, analysis):

        prompt = f"""
You are an AI Automation Solutions Architect.

Based on this business analysis:

{analysis}

Recommend ONE AI automation service that would provide the highest ROI.

Return ONLY valid JSON.

Schema:

{{
    "recommended_agent":"",
    "solution":"",
    "implementation_time":"",
    "estimated_price":"",
    "roi":"",
    "sales_pitch":""
}}

Rules:

- Recommend only ONE AI agent.
- Be realistic.
- Pricing should target small to medium businesses.
- Do not use markdown.
- Return JSON only.
"""

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        import json

        text = response.text.replace("```json", "").replace("```", "").strip()

        return json.loads(text)