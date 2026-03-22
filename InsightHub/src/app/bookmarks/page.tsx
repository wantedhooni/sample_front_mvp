import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { insightContentService } from "@/services/insight-content-service";

export default function BookmarksPage() {
  const bookmarks = insightContentService.getBookmarkedArticles();
  const categories = insightContentService.getCategories();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10 lg:px-10 lg:py-14">
      <SectionTitle
        eyebrow="Bookmarks"
        title="나중에 다시 읽을 아티클을 큐레이션처럼 저장합니다."
        description="북마크는 단순 저장 기능이 아니라, 유료 서비스 재방문을 만드는 핵심 장치입니다. 리스트와 카드 조합으로 컬렉션 느낌을 살렸습니다."
      />

      <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[36px] border border-black/10 bg-[#171717] p-8 text-[#f8f1e7]">
          <p className="text-xs uppercase tracking-[0.28em] text-[#f0c8b0]">
            Collection Summary
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              [`${bookmarks.length}`, "저장된 아티클"],
              ["14", "이번 주 읽을 예정"],
              ["3", "팀 공유 컬렉션"],
              ["87%", "재방문율"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[24px] bg-white/6 p-5">
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-2 text-sm text-[#d6c8bc]">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-[#d6c8bc]">
            저장 이후 개인화 메일과 결합하면 유료 유지율을 높이기 쉽습니다.
          </p>
        </div>

        <div className="grid gap-4">
          {bookmarks.map((article, index) => {
            const category = categories.find(
              (item) => item.slug === article.categorySlug,
            );

            return (
              <article
                key={article.slug}
                className="rounded-[30px] border border-black/10 bg-white/80 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e6d8] text-sm font-semibold text-[#8c654c]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#8c654c]">
                        {category?.name ?? "Insight"}
                      </p>
                      <h2 className="mt-2 font-serif text-3xl text-[#171717]">
                        {article.title}
                      </h2>
                    </div>
                  </div>
                  <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-[#5b4f46]">
                    {article.readTime}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#5b4f46]">
                  {article.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="rounded-full bg-[#171717] px-5 py-2.5 text-sm font-semibold text-[#f5efe6]"
                  >
                    상세 보기
                  </Link>
                  <Link
                    href="/subscribe"
                    className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-[#4f433a]"
                  >
                    프리미엄 해제
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
