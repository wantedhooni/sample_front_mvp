import { ProductCard } from "@/components/product-card";
import { productService } from "@/services/product-service";

const categories = ["All", "Design", "Code", "Audio", "Bundle"] as const;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const selectedCategory = categories.includes(category as (typeof categories)[number])
    ? (category as (typeof categories)[number])
    : "All";
  const products = productService.getProductsByCategory(selectedCategory);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10 lg:py-10">
      <section className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Catalog</p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-none text-white">
              디지털 상품 목록
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
              카테고리별로 정리된 디지털 상품을 비교하고, 상세 페이지와 장바구니
              흐름으로 이어질 수 있도록 구성했습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <a
                key={item}
                href={item === "All" ? "/products" : `/products?category=${item}`}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedCategory === item
                    ? "bg-white text-slate-950"
                    : "border border-white/15 text-slate-300 hover:bg-white/5"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
