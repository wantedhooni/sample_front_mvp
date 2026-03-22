"use client";

import { useCart } from "@/components/providers/cart-provider";

export function AddToCartButton({ productId }: { productId: string }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(productId)}
      className="rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-slate-950"
    >
      장바구니 담기
    </button>
  );
}
