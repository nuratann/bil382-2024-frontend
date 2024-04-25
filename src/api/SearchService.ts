import { Product } from "@/types/Product";
class SearchService {
    async getSuggestions(query: string): Promise<string[]> {
        const url = `http://localhost:8080/api/v1/search/suggest?query=${query}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch suggestions');
            }
            const suggestions = await response.json();
            const suggestionsArray = suggestions.map((suggestion: { query: string }) => suggestion.query);
            return suggestionsArray;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async search(query: string): Promise<Product[]> {
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

    async getRecomendations(): Promise<Product[]> {
        const url = `http://localhost:8080/api/v1/search/products/`;
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