import type { CheckoutInput, OrderSummary } from "@/types/store";

/**
 * 데모 체크아웃의 검증과 주문 요약 생성을 담당하는 서비스입니다.
 */
export class CheckoutService {
  /**
   * 입력값이 결제 진행 가능한 상태인지 검증합니다.
   */
  validateCheckout(input: CheckoutInput): string[] {
    const errors: string[] = [];

    if (!input.name.trim()) {
      errors.push("이름을 입력해 주세요.");
    }

    if (!input.email.includes("@")) {
      errors.push("유효한 이메일을 입력해 주세요.");
    }

    if (!input.team.trim()) {
      errors.push("소속 팀 또는 회사명을 입력해 주세요.");
    }

    return errors;
  }

  /**
   * 결제 완료 후 데모 주문 결과를 생성합니다.
   */
  createOrderSummary(input: CheckoutInput): OrderSummary {
    const orderId = `DS-${Date.now().toString().slice(-6)}`;

    return {
      orderId,
      message: `${input.name}님의 주문이 접수되었습니다. ${input.email}로 다운로드 안내를 발송합니다.`,
    };
  }
}

export const checkoutService = new CheckoutService();
