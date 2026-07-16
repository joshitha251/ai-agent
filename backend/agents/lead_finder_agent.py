from services.serper_services import search_businesses
from services.firecrawl_services import scrape_website
from services.gemini_services import analyze_business
from agents.proposal_agent import ProposalAgent


class LeadFinderAgent:

    def __init__(self):
        self.proposal_agent = ProposalAgent()

    def run(self, query, limit=3):

        print(f"\nSearching: {query}")

        search_results = search_businesses(query)

        organic_results = search_results.get("organic", [])

        print(f"Found {len(organic_results)} results")

        businesses = []

        for result in organic_results[:limit]:

            company = result.get("title")
            website = result.get("link")

            print("\n==============================")
            print(f"Company: {company}")
            print(f"Website: {website}")

            try:

                # Step 1 - Scrape Website
                print("Step 1: Scraping website...")
                website_data = scrape_website(website)
                print("✅ Firecrawl success")

                markdown = website_data.get("markdown", "")
                print(f"Markdown length: {len(markdown)}")

                # Step 2 - Analyze Business
                print("Step 2: Analyzing business...")
                analysis = analyze_business(markdown)
                print("✅ Gemini Analysis success")

                # Step 3 - Generate Proposal
                print("Step 3: Generating proposal...")
                proposal = self.proposal_agent.generate(analysis)
                print("✅ Proposal generated")

                businesses.append({
                    "company": company,
                    "website": website,
                    "analysis": analysis,
                    "proposal": proposal
                })

            except Exception as e:

                print("❌ ERROR")
                print(type(e).__name__)
                print(e)

        return businesses