from services.serper_services import search_businesses
from services.firecrawl_services import scrape_website
from services.gemini_service import analyze_business


class LeadFinderAgent:

    def run(self, query, limit=3):

        print(f"\nSearching: {query}")

        search_results = search_businesses(query)

        organic_results = search_results.get("organic", [])

        print(f"Found {len(organic_results)} results")

        businesses = []

        for result in organic_results[:limit]:

            company = result.get("title")
            website = result.get("link")

            print(f"\n==============================")
            print(f"Company: {company}")
            print(f"Website: {website}")

            try:

                print("Step 1: Scraping website...")
                website_data = scrape_website(website)

                print("✅ Firecrawl success")

                markdown = website_data.get("markdown", "")

                print(f"Markdown length: {len(markdown)}")

                print("Step 2: Gemini analysis...")

                analysis = analyze_business(markdown)

                print("✅ Gemini success")

                businesses.append({
                    "company": company,
                    "website": website,
                    "analysis": analysis
                })

            except Exception as e:

                print("❌ ERROR")
                print(type(e).__name__)
                print(e)

        return businesses