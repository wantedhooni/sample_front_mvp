import { NextResponse } from "next/server";
import { LeadService } from "@/services/lead-service";
import type { LeadPayload } from "@/types";

const leadService = new LeadService();

const requiredFields: Array<keyof LeadPayload> = [
  "name",
  "company",
  "email",
  "monthlyLeads",
  "message",
];

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<LeadPayload>;

  for (const field of requiredFields) {
    if (!payload[field]?.trim()) {
      return NextResponse.json(
        {
          message: `${field} 값이 비어 있습니다.`,
        },
        { status: 400 },
      );
    }
  }

  const lead = await leadService.submitLead({
    name: payload.name ?? "",
    company: payload.company ?? "",
    email: payload.email ?? "",
    monthlyLeads: payload.monthlyLeads ?? "",
    message: payload.message ?? "",
  });

  return NextResponse.json({
    message: "문의가 저장되었습니다.",
    leadId: lead.id,
  });
}
