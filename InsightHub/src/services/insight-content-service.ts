import { Article, Category, SubscriptionPlan } from "@/types/content";

const categories: Category[] = [
  {
    id: "market-intel",
    slug: "market-intel",
    name: "Market Intel",
    description: "거시경제와 산업 흐름을 연결해 시장의 다음 변곡점을 읽습니다.",
    audience: "전략, 투자, 사업개발 팀",
    articleCount: 18,
    accent: "from-[#d97757] to-[#f4c17a]",
  },
  {
    id: "consumer-signals",
    slug: "consumer-signals",
    name: "Consumer Signals",
    description: "검색 데이터와 커뮤니티 반응으로 소비자 관심 변화의 초입을 포착합니다.",
    audience: "마케팅, 브랜드, CRM 팀",
    articleCount: 26,
    accent: "from-[#4c7a6d] to-[#8cb8a7]",
  },
  {
    id: "ai-policy",
    slug: "ai-policy",
    name: "AI & Policy",
    description: "AI 규제, 모델 생태계, 기업 적용 전략을 실무 관점에서 정리합니다.",
    audience: "대표, PM, 정책 대응 팀",
    articleCount: 12,
    accent: "from-[#6a5acd] to-[#9aa7ff]",
  },
  {
    id: "deep-dive",
    slug: "deep-dive",
    name: "Deep Dive",
    description: "핵심 기업과 카테고리를 장문 분석으로 해부하는 프리미엄 리포트입니다.",
    audience: "리서치, 경영기획, 컨설팅 팀",
    articleCount: 9,
    accent: "from-[#81523f] to-[#c68d6d]",
  },
];

const articles: Article[] = [
  {
    slug: "global-ai-spending-reallocation",
    title: "글로벌 AI 예산은 신규 투자보다 기존 SaaS 교체로 이동하고 있다",
    summary:
      "2026년 1분기 기준 기업 IT 예산은 총액 확대보다 기존 툴의 대체를 통해 AI 지출 여력을 확보하는 흐름이 강화되고 있습니다.",
    categorySlug: "market-intel",
    premium: true,
    readTime: "8분",
    publishedAt: "2026.03.20",
    author: "Mina Cho",
    heroStat: "67%의 엔터프라이즈 팀이 기존 SaaS 예산 재배치를 우선 검토",
    bookmarkCount: 481,
    tags: ["AI Budget", "Enterprise", "B2B SaaS"],
    insightPoints: [
      "기업은 신규 파일럿보다 중복 SaaS 통합과 AI 전환 ROI 증명에 예산을 쓰고 있습니다.",
      "도입 결정권은 IT보다 재무와 사업부 공동 의사결정 구조로 이동하고 있습니다.",
      "검색 유입 상위 키워드는 'AI workflow replacement'와 'copilot ROI'로 수렴했습니다.",
    ],
    bodySections: [
      {
        title: "예산 총액보다 재배치가 핵심 변수",
        content:
          "올해 예산 증액을 기대하기 어려운 상황에서 기업은 기존 운영툴 라이선스를 정리하고 AI 자동화 툴로 전환하는 방식에 집중하고 있습니다. 도입 제안서는 비용 절감 근거와 전환 일정이 함께 제시될 때 통과율이 높습니다.",
      },
      {
        title: "벤더에게 필요한 것은 '대체 시나리오'",
        content:
          "기능 나열보다 현재 사용 중인 툴 체인을 어떤 순서로 대체할 수 있는지가 더 중요한 설득 포인트가 되었습니다. 랜딩 페이지와 세일즈 자료에서도 기존 툴 대비 절감 시간, 축소 가능한 계약 항목, 전환 리스크를 구체화해야 합니다.",
      },
    ],
  },
  {
    slug: "search-driven-wellness-brands",
    title: "웰니스 브랜드의 검색 유입은 '효능'보다 '습관 설계' 키워드에서 커진다",
    summary:
      "건강기능식품과 루틴 앱을 함께 다루는 브랜드들이 구매 키워드보다 유지 습관 관련 검색에서 더 높은 회원 전환을 확보하고 있습니다.",
    categorySlug: "consumer-signals",
    premium: false,
    readTime: "6분",
    publishedAt: "2026.03.18",
    author: "Jae Yoon",
    heroStat: "루틴 관련 키워드 유입자의 회원가입 전환율이 일반 검색 대비 2.4배",
    bookmarkCount: 362,
    tags: ["Search", "Wellness", "Growth"],
    insightPoints: [
      "소비자는 단일 제품보다 지속 가능한 습관 형성을 약속하는 브랜드에 반응합니다.",
      "검색 도입 키워드는 기능성보다 '아침 루틴', '수면 루틴' 같은 생활 맥락 중심입니다.",
      "회원 전환 CTA는 할인보다 맞춤 루틴 제안일 때 성과가 좋았습니다.",
    ],
    bodySections: [
      {
        title: "키워드 프레이밍이 달라졌다",
        content:
          "구매 의도가 분명한 키워드는 경쟁 단가가 높고 반복 방문도 제한적입니다. 반면 생활 습관 키워드는 문제 인식 초기 단계에 있는 사용자를 넓게 확보할 수 있어 콘텐츠 허브 전략과 잘 맞습니다.",
      },
      {
        title: "콘텐츠 허브는 제품 카탈로그가 아니다",
        content:
          "검색 기반 성장은 정보 구조에서 시작됩니다. 브랜드는 아티클, 체크리스트, 전문가 코멘트를 연결해 사용자가 자연스럽게 회원가입과 구독으로 이동하게 만들어야 합니다.",
      },
    ],
  },
  {
    slug: "asia-ai-regulation-procurement",
    title: "아시아 주요국 AI 규제 논의는 결국 조달 기준과 감사 체계로 수렴한다",
    summary:
      "규제 문구 자체보다 공공 조달과 내부 감사 기준이 실제 시장 진입장벽을 만들고 있어, B2B AI 기업은 이에 맞춘 제품 문서를 준비해야 합니다.",
    categorySlug: "ai-policy",
    premium: true,
    readTime: "7분",
    publishedAt: "2026.03.16",
    author: "Sora Han",
    heroStat: "조달 기준 문서 반영 여부가 공공 PoC 성사율을 좌우",
    bookmarkCount: 219,
    tags: ["AI Policy", "Procurement", "Compliance"],
    insightPoints: [
      "정책 변화는 법률 문안보다 공공기관 발주 요구사항에 먼저 드러납니다.",
      "기업은 제품 설명서보다 데이터 처리 흐름도와 감사 대응 문서를 먼저 요청받고 있습니다.",
      "규제 대응 콘텐츠는 SEO뿐 아니라 세일즈 enablement 자산으로도 재활용 가치가 높습니다.",
    ],
    bodySections: [
      {
        title: "정책 해설보다 실무 체크리스트",
        content:
          "시장은 선언적 원칙보다 실제 문서 요구사항에 반응합니다. 기업은 모델 출처, 데이터 보존 기간, 로그 추적 가능성 같은 항목을 제품 패키지로 제공해야 합니다.",
      },
      {
        title: "콘텐츠는 리드 확보 수단이 된다",
        content:
          "규제 대응 가이드는 검색 유입과 세일즈 후속 미팅 양쪽에서 높은 효율을 냅니다. 특히 다운로드형 아티클과 뉴스레터 연동은 전환에 유리합니다.",
      },
    ],
  },
  {
    slug: "creator-economy-membership-density",
    title: "크리에이터 멤버십은 팬 규모보다 콘텐츠 밀도에서 유지율이 갈린다",
    summary:
      "대형 팬덤보다 정기적으로 해석 가능한 인사이트를 제공하는 소규모 전문가형 채널이 더 높은 유료 유지율을 보여주고 있습니다.",
    categorySlug: "deep-dive",
    premium: true,
    readTime: "10분",
    publishedAt: "2026.03.14",
    author: "Eun Park",
    heroStat: "주 2회 이상 분석형 콘텐츠 발행 채널의 유료 유지율 78%",
    bookmarkCount: 507,
    tags: ["Membership", "Media", "Retention"],
    insightPoints: [
      "유료 전환은 대규모 도달보다 반복 방문 이유를 만드는 편집 구조에 달려 있습니다.",
      "콘텐츠 서비스는 홈 피드보다 카테고리 탐색과 아카이브 구조가 유지율에 더 중요합니다.",
      "북마크와 주간 큐레이션 메일은 재방문 장치로 매우 강력합니다.",
    ],
    bodySections: [
      {
        title: "구독 서비스의 경쟁력은 누적 구조",
        content:
          "사용자는 한 편의 킬러 콘텐츠보다 시간이 지날수록 쌓이는 지식 베이스를 가치 있게 평가합니다. 그래서 상세 페이지, 관련 글 연결, 개인 저장 기능이 핵심 경험이 됩니다.",
      },
      {
        title: "전환 설계는 탐색에서 시작한다",
        content:
          "유입 사용자는 바로 결제하지 않습니다. 먼저 카테고리를 훑고, 상세 글을 읽고, 저장한 뒤, 충분한 신뢰가 쌓였을 때 결제합니다. InsightHub MVP는 이 흐름을 데모 가능한 구조로 구현합니다.",
      },
    ],
  },
];

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "월 19,000원",
    description: "개인 리서처와 초기 팀을 위한 기본 플랜",
    cta: "무료 체험 시작",
    featured: false,
    benefits: [
      "주간 브리핑 3회",
      "아티클 북마크와 읽기 목록",
      "카테고리별 인기 아티클 접근",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "월 49,000원",
    description: "실무 의사결정에 바로 쓰는 프리미엄 인사이트 플랜",
    cta: "가장 인기 있는 플랜",
    featured: true,
    benefits: [
      "모든 프리미엄 딥다이브 리포트",
      "팀 공유용 요약 카드",
      "매주 월요일 에디터 큐레이션 메일",
      "출시 예정 데이터 보드 우선 접근",
    ],
  },
  {
    id: "team",
    name: "Team",
    price: "월 129,000원",
    description: "리서치, 전략, 마케팅 팀 협업을 위한 팀 플랜",
    cta: "팀 데모 요청",
    featured: false,
    benefits: [
      "최대 5인 좌석 포함",
      "팀 북마크 컬렉션",
      "분기별 맞춤 리서치 브리핑",
    ],
  },
];

/** InsightHub 화면에 필요한 콘텐츠와 플랜 데이터를 제공하는 서비스이다. */
export class InsightContentService {
  /** 서비스에서 노출하는 전체 카테고리 목록을 반환한다. */
  getCategories(): Category[] {
    return categories;
  }

  /** 서비스에서 사용하는 전체 아티클 목록을 반환한다. */
  getArticles(): Article[] {
    return articles;
  }

  /** 랜딩과 탐색 화면에서 강조 노출할 추천 아티클 목록을 반환한다. */
  getFeaturedArticles(): Article[] {
    return articles.slice(0, 3);
  }

  /** 슬러그로 아티클 상세 정보를 조회한다. */
  getArticleBySlug(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug);
  }

  /** 북마크 화면에서 사용할 저장된 아티클 목록을 반환한다. */
  getBookmarkedArticles(): Article[] {
    return articles.filter((article) => article.bookmarkCount >= 300);
  }

  /** 구독 결제 화면에 노출할 플랜 목록을 반환한다. */
  getSubscriptionPlans(): SubscriptionPlan[] {
    return subscriptionPlans;
  }
}

export const insightContentService = new InsightContentService();
