"use client";

import Link from "next/link";
import { useCart } from "@/components/providers/cart-provider";
import type { Product } from "@/types/store";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
      <div
        className={`relative h-56 bg-gradient-to-br ${product.accent} p-6 text-slate-950`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.8),_transparent_42%)]" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-800/70">
            <span>{product.category}</span>
            <span>{product.coverLabel}</span>
          </div>
          <div>
            <p className="text-sm text-slate-800/70">{product.formats.join(" • ")}</p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-none">
              {product.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
            {product.downloads} downloads
          </p>
          <p className="text-lg text-white">{product.tagline}</p>
          <p className="text-sm leading-6 text-slate-400">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Price</p>
            <p className="text-2xl font-semibold text-white">${product.price}</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Rating</p>
            <p className="text-white">{product.rating.toFixed(1)} / 5</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 rounded-full border border-white/15 px-4 py-3 text-center text-sm text-white transition hover:border-white/30 hover:bg-white/5"
          >
            상세 보기
          </Link>
          <button
            type="button"
            onClick={() => addItem(product.id)}
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.01]"
          >
            담기
          </button>
        </div>
      </div>
    </article>
  );
}
