"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { productService } from "@/services/product-service";
import type { CartItem, Product } from "@/types/store";

type CartProduct = CartItem & { product: Product };

type CartContextValue = {
  items: CartProduct[];
  itemCount: number;
  subtotal: number;
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "digitalshelf-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    try {
      return JSON.parse(raw) as CartItem[];
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const detailedItems = items
      .map((item) => {
        const product = productService
          .getAllProducts()
          .find((candidate) => candidate.id === item.productId);

        if (!product) {
          return undefined;
        }

        return { ...item, product };
      })
      .filter((item): item is CartProduct => Boolean(item));

    const subtotal = detailedItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    return {
      items: detailedItems,
      itemCount: detailedItems.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      addItem: (productId: string) => {
        setItems((current) => {
          const exists = current.find((item) => item.productId === productId);

          if (exists) {
            return current.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }

          return [...current, { productId, quantity: 1 }];
        });
      },
      removeItem: (productId: string) => {
        setItems((current) =>
          current
            .map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        );
      },
      clearCart: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
