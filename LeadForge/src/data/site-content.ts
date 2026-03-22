import type {
  BlogPost,
  FeatureItem,
  HighlightItem,
  PlanItem,
  ProcessStep,
  ValuePoint,
} from "@/types";

export const highlights: HighlightItem[] = [
  {
    label: "평균 문의 전환율",
    value: "18.6%",
    description: "히어로 CTA, 가격 비교, 문의 유도 흐름을 한 페이지에서 끊기지 않게 연결합니다.",
  },
  {
    label: "리드 응답 시간",
    value: "9분",
    description: "리드 데이터가 정리된 상태로 저장되어 첫 응대와 후속 영업 연결이 빨라집니다.",
  },
  {
    label: "도입 준비 기간",
    value: "3일",
    description: "브랜드 소개와 문의 수집에 필요한 핵심 화면만 우선 완성해 빠르게 시연할 수 있습니다.",
  },
];

export const productFeatures: FeatureItem[] = [
  {
    title: "설명보다 전환을 우선하는 랜딩 구조",
    description:
      "첫 화면에서 브랜드 메시지와 데모 요청 CTA를 함께 배치해, 방문자가 탐색보다 행동을 먼저 선택하도록 유도합니다.",
  },
  {
    title: "세일즈 관점으로 정리된 기능 소개",
    description:
      "기능을 단순 나열하지 않고 리드 수집, 우선순위 정리, 후속 응대 속도처럼 팀이 바로 이해할 수 있는 흐름으로 설명합니다.",
  },
  {
    title: "가격 비교와 문의 유도가 이어지는 구조",
    description:
      "플랜 선택 직후 문의 폼으로 자연스럽게 이동해, 가격을 검토한 사용자가 망설이지 않고 상담 요청을 남길 수 있습니다.",
  },
];

export const valuePoints: ValuePoint[] = [
  {
    kicker: "CRM-ready",
    title: "문의 정보를 바로 활용할 수 있게 저장",
    description:
      "이름, 회사명, 이메일, 예상 유입 규모, 현재 고민을 함께 저장해 영업 팀이 다음 액션을 바로 정의할 수 있습니다.",
  },
  {
    kicker: "Content flywheel",
    title: "블로그를 전환 보조 수단으로 사용",
    description:
      "제품 홍보가 아닌 운영 인사이트 중심의 글을 배치해 검색 유입과 신뢰 형성을 동시에 노립니다.",
  },
  {
    kicker: "Pitch clarity",
    title: "짧은 소개만으로도 퍼널을 설명 가능",
    description:
      "히어로, 기능, 가격, 문의 흐름이 한 번에 정리되어 있어 초기 고객 미팅이나 내부 데모에서도 설명이 쉽습니다.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "STEP 01",
    title: "문의 접수",
    description: "브랜드 맥락을 이해한 사용자가 필요한 정보를 남기면, 상담 우선순위를 판단할 수 있는 형태로 저장됩니다.",
  },
  {
    step: "STEP 02",
    title: "리드 검토",
    description: "월간 유입량과 현재 운영 방식을 기준으로 어떤 플랜이 적합한지 빠르게 분류할 수 있습니다.",
  },
  {
    step: "STEP 03",
    title: "데모 제안",
    description: "실사용 시나리오 중심의 데모 미팅으로 이어지도록 상담 포인트를 정리해 후속 영업 연결을 매끄럽게 만듭니다.",
  },
];

export const plans: PlanItem[] = [
  {
    badge: "START",
    name: "Launch",
    price: "₩390,000 /월",
    description: "초기 세일즈 페이지를 빠르게 열어야 하는 팀을 위한 기본 구성입니다.",
    features: ["랜딩 페이지 1종", "기능 소개 섹션", "가격 섹션", "문의 폼 및 저장"],
  },
  {
    badge: "GROWTH",
    name: "Pipeline",
    price: "₩790,000 /월",
    description: "콘텐츠와 문의 전환 흐름을 함께 운영하려는 팀에 적합한 플랜입니다.",
    features: [
      "랜딩 + 블로그 운영 구조",
      "리드 우선순위 입력 항목 확장",
      "주요 CTA 최적화",
      "월간 개선 제안 리포트",
    ],
    highlighted: true,
  },
  {
    badge: "ENTERPRISE",
    name: "Scale",
    price: "맞춤 문의",
    description: "여러 세그먼트와 영업 프로세스를 세밀하게 분리해야 하는 팀을 위한 구성입니다.",
    features: ["복수 문의 시나리오", "세일즈 팀용 폼 분기", "콘텐츠 구조 확장", "운영 대시보드 연동 준비"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "homepage-funnel-design",
    title: "브랜드 홈페이지를 전환 퍼널로 설계하는 4단계",
    excerpt: "좋은 소개 페이지와 실제 리드가 쌓이는 페이지의 차이는 섹션 순서보다 행동 설계에 있습니다.",
    category: "전환 설계",
    publishedAt: "2026-03-22",
    readTime: "5 min read",
    featured: true,
    sections: [
      {
        heading: "첫 화면은 설명보다 선택을 만들어야 합니다.",
        body: "브랜드 메시지는 강해야 하지만, 방문자가 바로 다음 행동을 고를 수 있어야 합니다. 따라서 핵심 약속과 CTA를 같은 시야 안에 두고, 불필요한 보조 요소를 줄여야 합니다.",
      },
      {
        heading: "기능 설명은 사용 흐름으로 번역해야 합니다.",
        body: "방문자는 제품 내부 구조보다 자신의 업무가 어떻게 바뀌는지를 알고 싶어 합니다. 리드 수집, 검토, 후속 응대처럼 팀이 이해하는 언어로 기능을 설명해야 합니다.",
      },
      {
        heading: "가격은 비교가 아니라 결정을 돕는 장치입니다.",
        body: "가격 섹션은 단순 표가 아니라 누구에게 어떤 범위가 맞는지 판단하게 만드는 장치입니다. CTA와 이어질 수 있도록 플랜별 목적을 분명하게 적는 편이 전환에 유리합니다.",
      },
    ],
  },
  {
    slug: "lead-form-fields-that-matter",
    title: "문의 폼에서 꼭 받아야 하는 정보는 무엇인가",
    excerpt: "필드를 많이 받는 것이 중요한 게 아니라, 다음 영업 액션에 바로 쓰일 정보를 받는 것이 핵심입니다.",
    category: "리드 수집",
    publishedAt: "2026-03-20",
    readTime: "4 min read",
    featured: true,
    sections: [
      {
        heading: "이름과 회사명만으로는 우선순위를 정할 수 없습니다.",
        body: "연락처 외에 현재 운영 상황과 예상 규모를 함께 받아야 실제 대응 우선순위를 판단할 수 있습니다. 최소한 월간 유입 규모와 주요 고민은 함께 받는 것이 좋습니다.",
      },
      {
        heading: "자유 서술 항목은 짧아도 필요합니다.",
        body: "정형 필드만으로는 구매 맥락을 파악하기 어렵습니다. 한두 문장의 자유 입력 영역이 있으면, 상담 시 어떤 문제를 먼저 풀어야 할지 훨씬 선명해집니다.",
      },
    ],
  },
  {
    slug: "pricing-sections-for-b2b-saas",
    title: "B2B SaaS 가격 섹션에서 이탈을 줄이는 방법",
    excerpt: "가격을 숨기거나 지나치게 복잡하게 만드는 대신, 의사결정 언어로 단순화해야 합니다.",
    category: "가격 전략",
    publishedAt: "2026-03-18",
    readTime: "6 min read",
    featured: true,
    sections: [
      {
        heading: "플랜 이름보다 플랜의 쓰임새가 먼저 보이게 합니다.",
        body: "사용자는 요금제 이름보다 자신과의 적합성을 먼저 판단합니다. 시작 단계, 성장 단계, 고도화 단계처럼 운영 맥락이 느껴지는 설명이 필요합니다.",
      },
      {
        heading: "가격 섹션 바로 아래에 문의 지점을 둡니다.",
        body: "검토가 끝난 직후 질문이 생기기 때문에, 문의 CTA는 가격과 가까이 있어야 합니다. 행동 지점이 멀어질수록 이탈 가능성이 높아집니다.",
      },
    ],
  },
];
