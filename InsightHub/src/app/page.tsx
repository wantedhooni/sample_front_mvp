import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { CategorySpotlight } from "@/components/category-spotlight";
import { SectionTitle } from "@/components/section-title";
import { insightContentService } from "@/services/insight-content-service";

export default function HomePage() {
  const categories = insightContentService.getCategories();
  const featuredArticles = insightContentService.getFeaturedArticles();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-10 lg:px-10 lg:py-14">
      <section className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="overflow-hidden rounded-[40px] border border-black/10 bg-[#171717] text-[#f8f1e7] shadow-[0_30px_120px_rgba(23,23,23,0.2)]">
          <div className="relative isolate px-8 py-10 md:px-10 md:py-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(217,119,87,0.45),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(76,122,109,0.35),_transparent_30%),linear-gradient(135deg,_#151515_10%,_#2b221d_55%,_#171717_100%)]" />
            <p className="text-xs uppercase tracking-[0.34em] text-[#f2ceb6]">
              Subscription Research / News
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl">
              검색 유입을 구독 전환으로 이어주는 인사이트 허브.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#ded0c3] md:text-lg">
              시장 해석, 소비자 신호, 정책 변화, 딥다이브 리포트를 하나의
              콘텐츠 여정으로 묶어 회원가입과 유료 전환을 설계합니다.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/subscribe"
                className="rounded-full bg-[#f6e9dc] px-6 py-3 text-sm font-semibold text-[#171717] transition hover:bg-white"
              >
                무료 체험 시작
              </Link>
              <Link
                href="/categories"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#f8f1e7] transition hover:bg-white/10"
              >
                카테고리 둘러보기
              </Link>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                ["48K", "월간 검색 유입"],
                ["8.6%", "회원가입 전환율"],
                ["3.1x", "유료 업그레이드 uplift"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-white/10 bg-white/6 p-5 backdrop-blur"
                >
                  <p className="text-3xl font-semibold">{value}</p>
                  <p className="mt-2 text-sm text-[#d3c7bc]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-[36px] border border-black/10 bg-[#f1e2d2] p-8 text-[#171717]">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8c654c]">
              Conversion Flow
            </p>
            <div className="mt-6 space-y-5">
              {[
                "SEO Landing으로 첫 유입 확보",
                "카테고리와 아티클 탐색으로 신뢰 형성",
                "북마크와 큐레이션으로 재방문 유도",
                "프리미엄 리포트와 결제 화면으로 업그레이드",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[24px] bg-white/70 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-sm font-semibold text-[#f5efe6]">
                    0{index + 1}
                  </div>
                  <p className="pt-2 text-sm leading-6 text-[#4b4037]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] border border-black/10 bg-white/80 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8c654c]">
              Demo Account
            </p>
            <p className="mt-4 font-serif text-3xl text-[#171717]">
              팀 공유 데모 환경 제공
            </p>
            <p className="mt-4 text-sm leading-7 text-[#5e5248]">
              ID `demo@insighthub.local` / PW `Passw0rd!` 로 기본 구독 사용자
              흐름을 검토할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Coverage"
          title="분명한 카테고리 구조로 탐색을 설계했습니다."
          description="콘텐츠 서비스의 핵심은 많이 보여주는 것이 아니라, 필요한 주제를 빠르게 찾게 만드는 것입니다."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategorySpotlight key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Featured Insights"
            title="검색 유입 이후 읽게 될 대표 아티클"
            description="짧은 요약, 강한 메시지, 관련 태그, 상세 페이지 이동 CTA까지 실제 뉴스/리서치 서비스 문법으로 구성했습니다."
          />
          <Link
            href="/bookmarks"
            className="text-sm font-semibold text-[#8c654c] underline underline-offset-4"
          >
            저장된 아티클 보기
          </Link>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              category={categories.find(
                (category) => category.slug === article.categorySlug,
              )}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[40px] border border-black/10 bg-white/70 px-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#8c654c]">
            Monetization
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#171717] md:text-5xl">
            무료 탐색은 넓게, 프리미엄 해설은 깊게.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5b4f46]">
            InsightHub는 무료 기사로 검색 유입을 받고, 북마크와 개인화된
            탐색으로 재방문을 만든 뒤, 프리미엄 리포트와 팀 플랜으로 전환을
            설계합니다.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "주간 에디터 큐레이션",
            "카테고리별 인기 리포트",
            "팀 공유용 북마크 컬렉션",
            "프리미엄 딥다이브 리포트",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[28px] bg-[#171717] p-6 text-[#f7efe5]"
            >
              <p className="text-sm uppercase tracking-[0.26em] text-[#f0c8b0]">
                Included
              </p>
              <p className="mt-6 font-serif text-3xl">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
