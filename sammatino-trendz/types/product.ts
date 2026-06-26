export type ProductCategory =
  | "Home Appliances"
  | "Kitchen Appliances"
  | "TVs"
  | "Fans"
  | "Lifestyle Accessories"
  | "Phone Accessories"
  | "Electronics"
  | "Consumer Goods";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  oldPrice?: number;
  currency: "GHS";
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  stock: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isOnSale?: boolean;
  tags: string[];
};