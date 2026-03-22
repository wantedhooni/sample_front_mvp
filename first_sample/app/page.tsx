import Link from "next/link";
import { homePageService } from "@/services/home-page.service";

export default function Home() {
  const { headline, subheadline, metrics, highlights, steps } =
    homePageService.getHomePageData();

  const hasHighlights = highlights.length > 0;
  const hasSteps = steps.length > 0;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
      <section className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_24px_80px_rgba(111,59,34,0.10)] backdrop-blur">
        <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-12">
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <span className="inline-flex w-fit rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand-deep">
                Customer MVP Frontend
              </span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  {headline}
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                  {subheadline}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#highlights"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-deep"
              >
                주요 기능 보기
              </Link>
              <Link
                href="#journey"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-white/70 px-6 text-sm font-semibold text-slate-800 transition hover:bg-white"
              >
                고객 여정 확인
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-[1.5rem] border border-line bg-surface-strong p-5"
              >
                <p className="text-sm font-medium text-muted">{metric.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {metric.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="mt-6 rounded-[2rem] border border-line bg-white/72 px-6 py-8 shadow-[0_18px_50px_rgba(31,41,55,0.05)] backdrop-blur sm:px-8"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-deep">핵심 기능</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              지금 바로 시연 가능한 고객 접점
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            운영팀이 설명하기 쉬운 구조와 고객이 이해하기 쉬운 흐름에 집중했다.
          </p>
        </div>

        {hasHighlights ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight.name}
                className="rounded-[1.5rem] border border-line bg-surface p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {highlight.name}
                  </h3>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {highlight.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-[1.5rem] border border-dashed border-line bg-surface p-6 text-sm text-muted">
            노출할 기능이 아직 등록되지 않았다.
          </div>
        )}
      </section>

      <section
        id="journey"
        className="mt-6 grid gap-6 rounded-[2rem] border border-line bg-[#fffaf5] px-6 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="space-y-3">
          <p className="text-sm font-semibold text-brand-deep">고객 여정</p>
          <h2 className="text-2xl font-semibold text-slate-900">
            고객이 길을 잃지 않도록 단계별로 설계한 흐름
          </h2>
          <p className="text-sm leading-6 text-muted">
            MVP 단계에서도 고객이 무엇을 해야 하는지 명확하게 알 수 있어야 한다.
          </p>
        </div>

        {hasSteps ? (
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="flex gap-4 rounded-[1.5rem] border border-line bg-white/80 p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-line bg-white/60 p-6 text-sm text-muted">
            고객 여정 데이터가 비어 있다.
          </div>
        )}
      </section>
    </main>
  );
}
