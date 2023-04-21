import { Category } from "./category.model";

export interface Product {
  _id: string;
  name: string;
  image: {
    sourceUrl: string;
    title: string;
  };
  description: string;
  price: number;
  category: Partial<Category>
}
