import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { insightContentService } from "@/services/insight-content-service";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightContentService
    .getArticles()
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightContentService.getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found | InsightHub",
    };
  }

  return {
    title: `${article.title} | InsightHub`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = insightContentService.getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = insightContentService
    .getCategories()
    .find((item) => item.slug === article.categorySlug);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10 lg:px-10 lg:py-14">
      <div className="rounded-[40px] border border-black/10 bg-[#171717] px-8 py-10 text-[#f8f1e7] shadow-[0_30px_120px_rgba(23,23,23,0.18)] md:px-10">
        <p className="text-xs uppercase tracking-[0.32em] text-[#f0c8b0]">
          {category?.name ?? "Insight"} · {article.publishedAt}
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
          {article.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#ddcfc2] md:text-lg">
          {article.summary}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] bg-white/6 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[#d7b8a4]">
              Hero Stat
            </p>
            <p className="mt-4 text-lg leading-7">{article.heroStat}</p>
          </div>
          <div className="rounded-[24px] bg-white/6 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[#d7b8a4]">
              Written by
            </p>
            <p className="mt-4 text-lg">{article.author}</p>
          </div>
          <div className="rounded-[24px] bg-white/6 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[#d7b8a4]">
              Saved by
            </p>
            <p className="mt-4 text-lg">
              {article.bookmarkCount.toLocaleString()} readers
            </p>
          </div>
        </div>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-[36px] border border-black/10 bg-white/75 p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#8c654c]">
              Key Takeaways
            </p>
            <div className="mt-5 space-y-4">
              {article.insightPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[24px] bg-[#f5ede4] px-5 py-4 text-sm leading-7 text-[#4f433a]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {article.bodySections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-3xl text-[#171717]">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#4f433a]">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[32px] border border-black/10 bg-[#f1e2d2] p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8c654c]">
              Reader Tools
            </p>
            <div className="mt-5 space-y-3 text-sm text-[#4f433a]">
              <div className="rounded-[22px] bg-white/75 px-4 py-3">
                북마크 저장
              </div>
              <div className="rounded-[22px] bg-white/75 px-4 py-3">
                팀 메모 추가
              </div>
              <div className="rounded-[22px] bg-white/75 px-4 py-3">
                큐레이션 뉴스레터에 포함
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-[#171717] p-7 text-[#f8f1e7]">
            <p className="text-xs uppercase tracking-[0.28em] text-[#f0c8b0]">
              Premium Access
            </p>
            <h2 className="mt-4 font-serif text-4xl">유료 구독으로 전체 아카이브 해제</h2>
            <p className="mt-4 text-sm leading-7 text-[#d6c8bc]">
              저장한 아티클, 딥다이브 리포트, 주간 브리핑 메일까지 하나의
              흐름으로 연결됩니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/subscribe"
                className="rounded-full bg-[#f6e9dc] px-5 py-3 text-sm font-semibold text-[#171717]"
              >
                플랜 보기
              </Link>
              <Link
                href="/bookmarks"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-[#f8f1e7]"
              >
                북마크 보기
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
