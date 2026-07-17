import json
from pathlib import Path

BASE_DIR = Path(__file__).parent

def load_json(filename):
    with open(BASE_DIR / filename, "r", encoding="utf-8") as f:
        return json.load(f)

company = load_json("company.json")
services = load_json("services.json")
pricing = load_json("pricing.json")
prompts = load_json("prompts.json")