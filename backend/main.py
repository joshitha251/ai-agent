from fastapi import FastAPI
from dotenv import load_dotenv
from google import genai
import os
from services.serper import search_businesses


load_dotenv()

app = FastAPI()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


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
