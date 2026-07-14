def clean_firecrawl(result):

    return {
        "markdown": result.get("markdown", ""),
        "title": result.get("metadata", {}).get("title"),
        "description": result.get("metadata", {}).get("description"),
        "language": result.get("metadata", {}).get("language")
    }