export interface ProductInsert {
    description: string;
    price: number;
    imageUrl: string;
}

export interface Product extends ProductInsert {
    id: number;
    available: string;
    rating: number;
}