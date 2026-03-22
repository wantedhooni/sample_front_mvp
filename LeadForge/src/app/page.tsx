import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { BlogService } from "@/services/blog-service";
import {
  highlights,
  plans,
  processSteps,
  productFeatures,
  valuePoints,
} from "@/data/site-content";

const blogService = new BlogService();

export default async function Home() {
  const featuredPosts = await blogService.getFeaturedPosts(3);

  return (
    <main className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,126,84,0.45),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(122,156,255,0.28),_transparent_25%),linear-gradient(180deg,_rgba(8,11,17,0.88),_rgba(8,11,17,1))]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-12 pt-6 lg:px-10">
          <header className="flex items-center justify-between py-4">
            <Link href="/" className="text-lg font-semibold tracking-[0.25em] text-white">
              LEADFORGE
            </Link>
            <nav className="hidden items-center gap-8 text-sm text-white/72 md:flex">
              <a href="#features">기능</a>
              <a href="#pricing">가격</a>
              <a href="#contact">문의</a>
              <Link href="/blog">블로그</Link>
            </nav>
          </header>

          <div className="grid flex-1 items-end gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                Brand site + lead capture SaaS
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white md:text-7xl lg:text-[5.5rem]">
                브랜드 신뢰를 만들고
                <br />
                영업 리드를 바로 쌓는
                <br />
                전환형 홈페이지.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                LeadForge는 랜딩, 기능 소개, 가격 정책, 블로그, 문의 접수를 하나의 흐름으로
                연결해 마케팅 사이트를 실제 파이프라인 자산으로 바꿉니다.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  데모 문의 남기기
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/84 transition-colors duration-300 hover:border-white/40 hover:text-white"
                >
                  전환 구조 보기
                </a>
              </div>
            </div>

            <div className="grid gap-8 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">
                    {item.label}
                  </p>
                  <p className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">
                    {item.value}
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/62">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Why teams choose LeadForge
          </p>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            마케팅 페이지를
            <br />
            영업 실행 화면처럼 설계합니다.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/65 md:text-base">
            보여주기용 소개 페이지에서 끝나지 않도록, 메시지 정렬부터 CTA 배치, 문의
            맥락, 후속 액션까지 이어지는 퍼널 구조를 전제로 구성했습니다.
          </p>
        </div>

        <div className="space-y-10">
          {productFeatures.map((feature, index) => (
            <article
              key={feature.title}
              className="grid gap-4 border-t border-white/12 pt-6 md:grid-cols-[60px_1fr]"
            >
              <span className="font-mono text-sm text-white/35">0{index + 1}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 md:text-base">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[var(--color-surface)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-3 lg:px-10">
          {valuePoints.map((point) => (
            <div key={point.title} className="border-t border-white/12 pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {point.kicker}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                {point.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Sales-ready workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              리드가 들어온 뒤에도
              <br />
              팀이 바로 움직일 수 있게.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.title} className="border-t border-white/12 pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">
                  {step.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Pricing
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                초기 세일즈 팀부터
                <br />
                확장 단계까지 대응합니다.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/62">
              도입 목적이 분명한 팀이 빠르게 비교할 수 있도록, 플랜별 범위와 리드 처리 수준을
              기준으로 구성했습니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-8 ${
                  plan.highlighted
                    ? "border-[var(--color-accent)] bg-[linear-gradient(180deg,rgba(255,126,84,0.16),rgba(255,126,84,0.04))]"
                    : "border-white/12 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/48">
                      {plan.badge}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{plan.name}</h3>
                  </div>
                  {plan.highlighted ? (
                    <span className="rounded-full border border-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                      추천
                    </span>
                  ) : null}
                </div>

                <p className="mt-8 text-4xl font-semibold tracking-[-0.05em] text-white">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/62">{plan.description}</p>

                <ul className="mt-8 space-y-3 text-sm text-white/78">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Capture demand
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              데모 요청을 남기면
              <br />
              영업 상담 흐름까지 이어집니다.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/62 md:text-base">
              팀 규모, 월간 유입량, 현재 운영 방식까지 함께 받아 우선순위를 빠르게 정리할 수
              있게 설계했습니다.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Blog
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                전환 퍼널을 설명하는
                <br />
                운영형 콘텐츠.
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-white/82 transition-colors hover:text-white"
            >
              모든 글 보기
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border-t border-white/12 pt-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">
                  {post.category} · {post.readTime}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white transition-transform duration-300 group-hover:translate-x-1">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-white/48 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p>LeadForge MVP · 브랜드 홈페이지 + 문의 리드 수집형 SaaS</p>
        <div className="flex gap-6">
          <a href="#pricing">가격</a>
          <a href="#contact">문의</a>
          <Link href="/blog">블로그</Link>
        </div>
      </footer>
    </main>
  );
}
