import Link from "next/link";
import { CartPanel } from "@/components/cart-panel";

export default function CartPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10 lg:py-10">
      <section className="flex flex-col gap-4 rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-6 lg:flex-row lg:items-end lg:justify-between lg:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Cart Flow</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-white">
            장바구니 관리
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
            선택한 디지털 상품을 수량 단위로 조정하고, 결제 전 총액을 확인할 수 있는
            전형적인 커머스 장바구니 경험입니다.
          </p>
        </div>
        <Link
          href="/products"
          className="rounded-full border border-white/15 px-5 py-3 text-sm text-white"
        >
          상품 더 보기
        </Link>
      </section>

      <CartPanel />
    </div>
  );
}
