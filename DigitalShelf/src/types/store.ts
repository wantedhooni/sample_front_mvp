export type ProductCategory = "Design" | "Code" | "Audio" | "Bundle";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  price: number;
  rating: number;
  downloads: string;
  coverLabel: string;
  accent: string;
  formats: string[];
  features: string[];
  included: string[];
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CheckoutInput = {
  name: string;
  email: string;
  team: string;
  paymentMethod: "CARD" | "TRANSFER";
};

export type OrderSummary = {
  orderId: string;
  message: string;
};
