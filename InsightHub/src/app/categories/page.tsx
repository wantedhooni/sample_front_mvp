import { ArticleCard } from "@/components/article-card";
import { SectionTitle } from "@/components/section-title";
import { insightContentService } from "@/services/insight-content-service";

export default function CategoriesPage() {
  const categories = insightContentService.getCategories();
  const articles = insightContentService.getArticles();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-10 lg:px-10 lg:py-14">
      <SectionTitle
        eyebrow="Categories"
        title="팀이 지금 읽어야 할 인사이트를 주제별로 묶었습니다."
        description="리서치 서비스는 피드보다 정보 구조가 중요합니다. 카테고리 탐색 화면은 사용자가 자신에게 맞는 깊이를 빠르게 찾도록 설계되었습니다."
      />

      <section className="grid gap-5 lg:grid-cols-2">
        {categories.map((category) => {
          const categoryArticles = articles.filter(
            (article) => article.categorySlug === category.slug,
          );

          return (
            <div
              key={category.id}
              id={category.slug}
              className="rounded-[34px] border border-black/10 bg-white/75 p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#8c654c]">
                    {category.audience}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl text-[#171717]">
                    {category.name}
                  </h2>
                </div>
                <span className="rounded-full bg-[#f3e6d8] px-4 py-2 text-sm font-semibold text-[#7a5f4c]">
                  {category.articleCount} archived
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#5b4f46]">
                {category.description}
              </p>
              <div className="mt-6 grid gap-4">
                {categoryArticles.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    category={category}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
