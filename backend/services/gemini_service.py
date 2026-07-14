import os
import json
from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()

# Initialize Gemini client
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def analyze_business(content):
    """
    Analyze a company's website content and identify AI automation opportunities.
    Returns a Python dictionary.
    """

    prompt = f"""
You are a senior AI Automation Consultant.

Analyze the following business website.

Website Content:
{content}

Your job is to identify:

1. Business summary
2. Pain points
3. AI automation opportunities
4. Estimated monthly savings
5. Lead score (0-100)
6. Priority (LOW, MEDIUM, HIGH)

IMPORTANT RULES:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap the JSON inside ```json.
- Do NOT explain anything.
- Return exactly this schema:

{{
    "lead_score": 0,
    "summary": "",
    "pain_points": [],
    "automation_opportunities": [],
    "estimated_monthly_savings": "",
    "priority": ""
}}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    # Get Gemini response
    text = response.text.strip()

    # Remove markdown if Gemini accidentally returns it
    text = text.replace("```json", "").replace("```", "").strip()

    # Convert JSON string to Python dictionary
    try:
        return json.loads(text)

    except json.JSONDecodeError:
        return {
            "success": False,
            "error": "Gemini returned invalid JSON.",
            "raw_response": text
        }