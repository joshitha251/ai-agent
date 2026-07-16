from services.gemini_services import analyze_business


class AnalysisAgent:

    def analyze(self, website):

        return analyze_business(
            website
        )