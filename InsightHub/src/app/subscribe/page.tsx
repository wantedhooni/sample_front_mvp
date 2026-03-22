import { SectionTitle } from "@/components/section-title";
import { insightContentService } from "@/services/insight-content-service";

export default function SubscribePage() {
  const plans = insightContentService.getSubscriptionPlans();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10 lg:px-10 lg:py-14">
      <SectionTitle
        eyebrow="Subscribe"
        title="무료 탐색 뒤에 바로 연결되는 구독 결제 구조"
        description="플랜 비교, 핵심 혜택, 팀 업셀 문구를 함께 배치해 개인 결제와 팀 데모 요청이 모두 가능한 화면으로 구성했습니다."
      />

      <section className="grid gap-6 xl:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`rounded-[34px] border p-7 ${
              plan.featured
                ? "border-[#c78161] bg-[#171717] text-[#f8f1e7] shadow-[0_30px_120px_rgba(23,23,23,0.18)]"
                : "border-black/10 bg-white/80 text-[#171717]"
            }`}
          >
            <p
              className={`text-xs uppercase tracking-[0.28em] ${
                plan.featured ? "text-[#f0c8b0]" : "text-[#8c654c]"
              }`}
            >
              {plan.cta}
            </p>
            <h2 className="mt-5 font-serif text-4xl">{plan.name}</h2>
            <p
              className={`mt-3 text-sm leading-7 ${
                plan.featured ? "text-[#d6c8bc]" : "text-[#5b4f46]"
              }`}
            >
              {plan.description}
            </p>
            <p className="mt-8 text-3xl font-semibold">{plan.price}</p>

            <div className="mt-8 space-y-3">
              {plan.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className={`rounded-[22px] px-4 py-3 text-sm ${
                    plan.featured
                      ? "bg-white/6 text-[#f8f1e7]"
                      : "bg-[#f5ede4] text-[#4f433a]"
                  }`}
                >
                  {benefit}
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold ${
                plan.featured
                  ? "bg-[#f6e9dc] text-[#171717]"
                  : "bg-[#171717] text-[#f5efe6]"
              }`}
            >
              {plan.featured ? "7일 무료 체험 시작" : plan.cta}
            </button>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-[36px] border border-black/10 bg-[#f1e2d2] p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#8c654c]">
            Why convert
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#171717] md:text-5xl">
            무료 뉴스와 다른 점은, 맥락까지 정리해 준다는 데 있습니다.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#4f433a]">
            InsightHub는 단순 기사 나열이 아니라 카테고리별 아카이브, 북마크,
            딥다이브 리포트, 팀 공유 흐름까지 하나의 제품 경험으로 제공합니다.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            "무료 사용자는 검색 유입 중심 콘텐츠 탐색",
            "회원은 북마크와 큐레이션 메일 접근",
            "유료 사용자는 프리미엄 리포트와 팀 기능 해제",
          ].map((item) => (
            <div key={item} className="rounded-[24px] bg-white/75 px-5 py-4">
              <p className="text-sm leading-7 text-[#4f433a]">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
