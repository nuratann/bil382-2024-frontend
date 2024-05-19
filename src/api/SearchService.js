
class SearchService {
    async getSuggestions(query) {
        const url = `http://localhost:8080/api/v1/search/suggest?query=${query}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch suggestions');
            }
            const suggestions = await response.json();
            const suggestionsArray = suggestions.map((suggestion) => suggestion.query);
            return suggestionsArray;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async search(query) {
        const url = `http://localhost:8080/api/v1/search/?query=${query}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const products = await response.json();
            console.log(products)
            return products;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default new SearchService()