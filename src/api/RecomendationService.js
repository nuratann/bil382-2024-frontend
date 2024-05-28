import {recomendations} from './MockData/recommendations'
class RecomendationService{
    async getRecomendations(){
        const url = `http://localhost:8081/api/v1/search/recomendations/`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const products = await response.json();

            return products;
        } catch (error) {            
            console.error('Error:', error);
            console.log('use mock data(get recommendations)')
            return recomendations;
        }
    }
}
export default new RecomendationService()