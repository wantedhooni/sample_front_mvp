"use client";

import Link from "next/link";
import { useCart } from "@/components/providers/cart-provider";

export function CartPanel() {
  const { items, subtotal, addItem, removeItem } = useCart();

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Cart</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-white">
            현재 담긴 상품
          </h2>
        </div>
        <p className="text-sm text-slate-400">{items.length} items</p>
      </div>

      <div className="mt-6 space-y-4">
        {items.length === 0 ? (
          <div className="rounded-[1.5rem] border border-dashed border-white/15 p-8 text-center text-slate-400">
            아직 담긴 상품이 없습니다. 상품 목록에서 자산을 추가해 보세요.
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                  {item.product.category}
                </p>
                <h3 className="mt-2 text-xl text-white">{item.product.name}</h3>
                <p className="mt-1 text-sm text-slate-400">${item.product.price} / license</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => removeItem(item.productId)}
                  className="h-10 w-10 rounded-full border border-white/15 text-white"
                >
                  -
                </button>
                <span className="w-8 text-center text-white">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => addItem(item.productId)}
                  className="h-10 w-10 rounded-full border border-white/15 text-white"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/8 p-5">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <p className="mt-2 text-xs text-slate-400">
          세금과 국가별 결제 수수료는 데모에서 제외되어 있습니다.
        </p>
        <Link
          href="/checkout"
          className="mt-4 block rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-slate-950"
        >
          체크아웃 진행
        </Link>
      </div>
    </section>
  );
}
