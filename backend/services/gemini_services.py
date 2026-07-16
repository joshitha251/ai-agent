import os
import json

# Try to load environment variables from a .env file if python-dotenv is available
try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    # dotenv is optional; continue if it's not installed or .env is absent
    pass

# Try to import the Gemini SDK (google.genai). If it's missing, handle gracefully
try:
    from google import genai
except Exception:
    genai = None

# Initialize Gemini client if possible
client = None
if genai is not None:
    api_key = os.getenv("GEMINI_API_KEY")
    if api_key:
        try:
            client = genai.Client(api_key=api_key)
        except Exception:
            client = None


def analyze_business(content):
    """
    Analyze a company's website content and identify AI automation opportunities.
    Returns a Python dictionary.
    """

    if client is None:
        return {
            "success": False,
            "error": "Gemini client is not configured. Install the 'google.genai' SDK and set GEMINI_API_KEY."
        }

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