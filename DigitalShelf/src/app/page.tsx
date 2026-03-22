import Link from "next/link";
import { HeroShelf } from "@/components/hero-shelf";
import { ProductCard } from "@/components/product-card";
import { productService } from "@/services/product-service";

const featuredProducts = productService.getFeaturedProducts();

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-8 lg:px-10 lg:py-10">
      <HeroShelf />

      <section className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
            Why DigitalShelf
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight text-white">
            탐색, 비교, 장바구니,
            <br />
            결제까지 모두 시연 가능
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            고객 프론트 데모에서 필요한 핵심 흐름을 하나의 제품 경험으로 연결했습니다.
            강한 첫 인상과 실제 구매 전환 구조를 동시에 보여주는 구성이 핵심입니다.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "홈에서 대표 상품과 큐레이션 진열을 강조",
              "상품 목록에서 카테고리와 가격 비교",
              "상세 페이지에서 포함 항목과 라이선스 정보 확인",
              "장바구니와 체크아웃에서 구매 흐름 마무리",
            ].map((line) => (
              <div key={line} className="rounded-[1.5rem] border border-white/10 p-4 text-slate-300">
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(125,211,252,0.06))] p-6 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Demo Flow</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-white">
              5-step storefront story
            </h2>
          </div>
          <Link
            href="/products"
            className="rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/5"
          >
            전체 상품 보러 가기
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {["Home", "Catalog", "Detail", "Cart", "Checkout"].map((step, index) => (
            <div key={step} className="rounded-[1.6rem] border border-white/10 bg-slate-950/50 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                Step 0{index + 1}
              </p>
              <p className="mt-3 text-xl text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
