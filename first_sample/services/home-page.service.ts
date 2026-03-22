export type HeroMetric = {
  label: string;
  value: string;
  description: string;
};

export type FeatureHighlight = {
  name: string;
  description: string;
  status: "ready" | "beta" | "planned";
};

export type CustomerStep = {
  title: string;
  description: string;
};

export type HomePageData = {
  headline: string;
  subheadline: string;
  metrics: HeroMetric[];
  highlights: FeatureHighlight[];
  steps: CustomerStep[];
};

/**
 * 고객용 홈 화면에 필요한 정적 데이터를 제공하는 서비스다.
 */
export class HomePageService {
  /**
   * 메인 화면에서 사용할 핵심 소개 데이터를 반환한다.
   */
  getHomePageData(): HomePageData {
    return {
      headline: "고객 문의부터 신청 전환까지 한 화면에서 정리하는 MVP",
      subheadline:
        "복잡한 운영 도구 없이도 고객이 현재 진행 상태를 이해하고 바로 다음 행동으로 이어질 수 있도록 설계한 프론트엔드 시작점이다.",
      metrics: [
        {
          label: "응답 속도",
          value: "24시간 이내",
          description: "첫 문의 접수 후 고객 안내 메시지를 빠르게 제공한다.",
        },
        {
          label: "주요 기능",
          value: "3개",
          description: "상태 확인, 신청 유도, 자주 묻는 질문에 집중한다.",
        },
        {
          label: "배포 기준",
          value: "MVP Ready",
          description: "현업 데모와 초기 고객 검증을 바로 진행할 수 있다.",
        },
      ],
      highlights: [
        {
          name: "진행 상태 요약",
          description: "고객이 현재 단계와 다음 액션을 직관적으로 확인한다.",
          status: "ready",
        },
        {
          name: "간편 신청 유도",
          description: "핵심 CTA를 상단과 하단에 배치해 전환 흐름을 단순화한다.",
          status: "ready",
        },
        {
          name: "운영 공지 배너",
          description: "점검, 정책 변경, 혜택 안내를 안전하게 노출할 수 있다.",
          status: "beta",
        },
      ],
      steps: [
        {
          title: "서비스 확인",
          description: "고객이 핵심 혜택과 대상 조건을 빠르게 이해한다.",
        },
        {
          title: "문의 또는 신청",
          description: "CTA를 통해 문의를 남기거나 신청을 바로 시작한다.",
        },
        {
          title: "진행 상황 추적",
          description: "처리 단계와 필요한 후속 액션을 계속 확인한다.",
        },
      ],
    };
  }
}

export const homePageService = new HomePageService();
