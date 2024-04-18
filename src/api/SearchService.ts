class SearchService {
    async getSuggestions(query: string): Promise<string[]> {
        const url = `http://localhost:8080/api/v1/search/suggest?query=${query}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch suggestions');
            }
            const suggestions = await response.json();
            console.log(suggestions)
            const suggestionsArray = suggestions.map((suggestion: { query: string }) => suggestion.query);
            return suggestionsArray;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default new SearchService()