import Link from "next/link";

const shelfStats = [
  { label: "Assets Curated", value: "180+" },
  { label: "Ready Formats", value: "14" },
  { label: "Avg. Rating", value: "4.9" },
];

export function HeroShelf() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,#08111e_0%,#0d1f37_48%,#101c2c_100%)] px-6 py-8 lg:px-10 lg:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.18),transparent_26%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.14),transparent_18%),radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.18),transparent_24%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.42em] text-cyan-200">
            Curated Digital Commerce
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[0.94] text-white sm:text-6xl lg:text-7xl">
            팀이 바로 구매하고
            <br />
            즉시 적용하는 디지털 자산 스토어
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            DigitalShelf는 디자인 키트, 모션 패키지, 오디오 번들 같은 디지털
            상품을 탐색부터 체크아웃까지 한 번에 데모할 수 있는 프론트 MVP입니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-white px-6 py-4 text-center text-sm font-medium text-slate-950 transition hover:scale-[1.01]"
            >
              상품 둘러보기
            </Link>
            <Link
              href="/checkout"
              className="rounded-full border border-white/15 px-6 py-4 text-center text-sm text-white transition hover:bg-white/5"
            >
              체크아웃 데모 보기
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Featured Stack
              </p>
              <div className="mt-5 rounded-[1.5rem] bg-[linear-gradient(140deg,#f8fafc_0%,#7dd3fc_48%,#dbeafe_100%)] p-5 text-slate-950">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-700">
                  Launch Bundle Pro
                </p>
                <p className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-none">
                  Build once,
                  <br />
                  launch fast.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Best Seller
              </p>
              <div className="mt-5 flex h-[12.5rem] flex-col justify-between rounded-[1.5rem] bg-[linear-gradient(160deg,#0f172a_0%,#1d4ed8_55%,#7dd3fc_100%)] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                  Signal UI Kit
                </p>
                <p className="font-[family-name:var(--font-display)] text-3xl text-white">
                  Dense UI for
                  <br />
                  real operators.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-3">
            {shelfStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.4rem] bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
