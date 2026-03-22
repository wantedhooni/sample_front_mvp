"use client";

import { useState, useTransition } from "react";
import type { LeadPayload } from "@/types";

const initialForm: LeadPayload = {
  name: "",
  company: "",
  email: "",
  monthlyLeads: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<LeadPayload>(initialForm);
  const [feedback, setFeedback] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const updateField = (field: keyof LeadPayload, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("");

    startTransition(async () => {
      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const result = (await response.json()) as { message?: string };

        if (!response.ok) {
          setFeedback(result.message ?? "문의 접수 중 오류가 발생했습니다.");
          return;
        }

        setForm(initialForm);
        setFeedback("문의가 저장되었습니다. 데모 제안 메일을 곧 전달드리겠습니다.");
      } catch {
        setFeedback("네트워크 오류로 문의를 저장하지 못했습니다.");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/12 bg-white/[0.03] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white/70">
          담당자명
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[var(--color-accent)]"
            placeholder="김리드"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-white/70">
          회사명
          <input
            required
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[var(--color-accent)]"
            placeholder="LeadForge Labs"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-white/70">
          이메일
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[var(--color-accent)]"
            placeholder="team@leadforge.ai"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-white/70">
          월간 예상 유입량
          <select
            required
            value={form.monthlyLeads}
            onChange={(event) => updateField("monthlyLeads", event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[var(--color-accent)]"
          >
            <option value="">선택해 주세요</option>
            <option value="0-50">월 0-50건</option>
            <option value="51-200">월 51-200건</option>
            <option value="201-500">월 201-500건</option>
            <option value="500+">월 500건 이상</option>
          </select>
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-2 text-sm text-white/70">
        현재 고민
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[var(--color-accent)]"
          placeholder="현재 홈페이지 운영 방식, 원하는 전환 목표, 팀 상황을 간단히 적어 주세요."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-white/48">
          저장 위치: <span className="font-mono text-white/72">data/leads.json</span>
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "저장 중..." : "데모 요청 보내기"}
        </button>
      </div>

      {feedback ? <p className="mt-4 text-sm text-white/72">{feedback}</p> : null}
    </form>
  );
}
