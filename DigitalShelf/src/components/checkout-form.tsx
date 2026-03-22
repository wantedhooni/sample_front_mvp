"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/providers/cart-provider";
import { checkoutService } from "@/services/checkout-service";
import type { CheckoutInput } from "@/types/store";

const initialForm: CheckoutInput = {
  name: "Demo Buyer",
  email: "demo@digitalshelf.local",
  team: "DigitalShelf Labs",
  paymentMethod: "CARD",
};

export function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutInput>(initialForm);
  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = checkoutService.validateCheckout(form);

    if (items.length === 0) {
      validationErrors.push("장바구니에 상품을 먼저 담아 주세요.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    const order = checkoutService.createOrderSummary(form);
    setErrors([]);
    setSuccessMessage(`${order.orderId} · ${order.message}`);
    clearCart();

    window.setTimeout(() => {
      router.push("/products");
    }, 1800);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Checkout</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-white">
            바로 결제 가능한 데모 플로우
          </h2>
        </div>

        <div className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm text-slate-300">이름</span>
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-slate-300">이메일</span>
            <input
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-slate-300">팀 / 회사명</span>
            <input
              value={form.team}
              onChange={(event) => setForm({ ...form, team: event.target.value })}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600"
            />
          </label>

          <div className="grid gap-2">
            <span className="text-sm text-slate-300">결제 수단</span>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { value: "CARD", label: "Corporate Card" },
                { value: "TRANSFER", label: "Bank Transfer" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      paymentMethod: option.value as CheckoutInput["paymentMethod"],
                    })
                  }
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    form.paymentMethod === option.value
                      ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
                      : "border-white/10 bg-slate-950/50 text-slate-300"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {errors.length > 0 ? (
          <div className="mt-5 rounded-2xl border border-rose-300/30 bg-rose-300/10 p-4 text-sm text-rose-100">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}

        {successMessage ? (
          <div className="mt-5 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm text-emerald-100">
            {successMessage}
          </div>
        ) : null}

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-white px-5 py-4 text-sm font-medium text-slate-950"
        >
          결제 완료 데모 실행
        </button>
      </form>

      <aside className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,31,54,0.92),rgba(8,12,20,0.96))] p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Order Summary</p>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div
              key={item.productId}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">{item.product.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.product.category}</p>
                </div>
                <p className="text-sm text-slate-300">
                  {item.quantity} x ${item.product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
          <div className="flex items-center justify-between text-slate-300">
            <span>총 결제 금액</span>
            <strong className="text-2xl text-white">${subtotal}</strong>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            데모 계정 정보
            <br />
            Email: demo@digitalshelf.local
            <br />
            Team: DigitalShelf Labs
          </p>
        </div>
      </aside>
    </div>
  );
}
