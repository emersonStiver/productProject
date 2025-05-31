export interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  quantity: number;
}

export type NewProduct = Omit<Product, 'id'>;
