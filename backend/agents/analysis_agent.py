from services.gemini_service import analyze_business


class AnalysisAgent:

    def analyze(self, website):

        return analyze_business(
            website
        )