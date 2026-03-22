import { CheckoutForm } from "@/components/checkout-form";

export default function CheckoutPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10 lg:py-10">
      <section className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Checkout</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-white">
          디지털 체크아웃 데모
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
          장바구니에 담긴 디지털 상품을 데모 계정으로 바로 결제해 볼 수 있습니다.
          실제 PG 연동 대신 입력 검증과 주문 완료 메시지까지 확인할 수 있습니다.
        </p>
      </section>

      <CheckoutForm />
    </div>
  );
}
