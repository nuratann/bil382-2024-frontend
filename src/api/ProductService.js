import { randomUUID } from '../helpers/randomUUID';
import {users} from './MockData/users'
import {jwtDecode} from 'jwt-decode'

class UserService {

    async getProduct(productId) {
        try {
            const url = `http://localhost:8081/api/v1/products/${productId}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    
            if (!response.ok) {
                throw new Error('failed to fetch product')
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async getCategory(categoryName, access_token) {
        try {
            console.log(access_token)
            const url = `http://localhost:8081/api/v1/categories/${categoryName}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                },
            });
    
            if (!response.ok) {
                throw new Error('failed to fetch category')
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    productToDTO(product) {
        return {
            id: product.id,
            category: product.category,
            mediaLinks: JSON.stringify(product.mediaLinks),
            sellerId: product.sellerId,
            title: product.title,
            description: product.description,
            options: JSON.stringify(product.options),
            specs: JSON.stringify(product.specs),
            stock: product.stock,
            deliveryDays: product.deliveryDays
        }
    }

    async createProduct(sellerId, accessToken) {
        try {
            const url = `http://localhost:8081/api/v1/products/`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: sellerId
            });
            
    
            if (!response.ok) {
                throw new Error('failed to create product')
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async updateProduct(product, accessToken) {
        try {
            const url = `http://localhost:8081/api/v1/products/${product.id}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...product, 
                    mediaLinks: JSON.stringify(product.mediaLinks), 
                    specs: JSON.stringify(product.specs), 
                    options: JSON.stringify(product.options), 
                })
            });
    
            if (!response.ok) {
                throw new Error('failed to update product')
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default new UserService()