export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#171717] text-[#f5efe6]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-serif text-3xl">InsightHub</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#d2c7bb]">
            검색 유입부터 유료 전환까지 이어지는 인사이트 구독형 뉴스 서비스를
            데모할 수 있도록 구성한 프론트 MVP입니다.
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[#bcae9f]">
            Demo Access
          </p>
          <p className="mt-3 text-sm">URL: http://localhost:3100</p>
          <p className="text-sm">ID: demo@insighthub.local</p>
          <p className="text-sm">PW: Passw0rd!</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[#bcae9f]">
            Coverage
          </p>
          <p className="mt-3 text-sm leading-6 text-[#d2c7bb]">
            Market Intel, Consumer Signals, AI &amp; Policy, Deep Dive
          </p>
        </div>
      </div>
    </footer>
  );
}
