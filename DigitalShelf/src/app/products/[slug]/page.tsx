import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductCard } from "@/components/product-card";
import { productService } from "@/services/product-service";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productService.getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productService
    .getAllProducts()
    .filter((candidate) => candidate.slug !== product.slug)
    .slice(0, 2);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10 lg:py-10">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          className={`min-h-[32rem] rounded-[2.4rem] bg-gradient-to-br ${product.accent} p-8 text-slate-950`}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-800/70">
              <span>{product.category}</span>
              <span>{product.coverLabel}</span>
            </div>
            <div>
              <p className="text-sm text-slate-800/70">{product.formats.join(" • ")}</p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl leading-none">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-7 text-slate-900/80">
                {product.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Product Detail</p>
              <h2 className="mt-3 text-3xl text-white">{product.name}</h2>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Price</p>
              <p className="mt-2 text-4xl text-white">${product.price}</p>
            </div>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-400">{product.description}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.6rem] border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Key Features</p>
              <div className="mt-4 space-y-3">
                {product.features.map((feature) => (
                  <p key={feature} className="text-sm text-slate-300">
                    {feature}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Included</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.included.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToCartButton productId={product.id} />
            <Link
              href="/products"
              className="rounded-full border border-white/15 px-5 py-3 text-center text-sm text-white"
            >
              목록으로 돌아가기
            </Link>
            <Link
              href="/cart"
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-center text-sm text-cyan-100"
            >
              장바구니 보기
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Related</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-white">
              함께 보면 좋은 상품
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  );
}
