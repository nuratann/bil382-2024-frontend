export type Product = {
    id: number;
    img: string;
    title: string;
    description: string;
    //private Json specs;
    rating: number;
    category: string;
    orders: number;
    sells: string[];
    quantity: number;
    price: number;
    old_price: number;
    seller: string;
    premium_seller: boolean;
    reviews: number;
    delivery_date: string;
    specs: Object;
}