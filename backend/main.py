from fastapi import FastAPI
from dotenv import load_dotenv
from google import genai
import os
from services.firecrawl_services import scrape_website
from services.serper_services import search_businesses
from agents.analysis_agent import AnalysisAgent
from agents.lead_finder_agent import LeadFinderAgent

load_dotenv()

app = FastAPI()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

analysis_agent = AnalysisAgent()
lead_finder_agent = LeadFinderAgent()

@app.get("/")
def home():
    return {"message": "AI Sales Agent Backend Running 🚀"}


@app.get("/test-ai")
def test_ai():

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents="Say hello to Josh in one sentence."
    )

    return {
        "response": response.text
    }

@app.get("/search")
def search(query: str):

    return search_businesses(query)

@app.get("/research")
def research(url: str):

    return scrape_website(url)

@app.post("/analyze")
def analyze(data: dict):

    return analysis_agent.analyze(
        data["content"]
    )

@app.get("/run-agent")
def run_agent(query: str):

    return lead_finder_agent.run(query)