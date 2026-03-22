import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LeadPayload, LeadRecord } from "@/types";

/**
 * 문의 리드를 로컬 저장소에 보관하고 조회하는 서비스 클래스입니다.
 */
export class LeadService {
  private readonly storagePath = path.join(process.cwd(), "data", "leads.json");

  /**
   * 저장소 디렉터리와 파일을 생성해 리드 저장 준비를 보장합니다.
   */
  private async ensureStorage(): Promise<void> {
    await mkdir(path.dirname(this.storagePath), { recursive: true });

    try {
      await readFile(this.storagePath, "utf-8");
    } catch {
      await writeFile(this.storagePath, "[]\n", "utf-8");
    }
  }

  /**
   * 현재까지 저장된 리드 목록을 읽어옵니다.
   */
  private async readLeads(): Promise<LeadRecord[]> {
    await this.ensureStorage();
    const raw = await readFile(this.storagePath, "utf-8");
    return JSON.parse(raw) as LeadRecord[];
  }

  /**
   * 전달받은 문의 정보를 신규 리드로 저장합니다.
   */
  async submitLead(payload: LeadPayload): Promise<LeadRecord> {
    const leads = await this.readLeads();

    const lead: LeadRecord = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...payload,
    };

    leads.unshift(lead);
    await writeFile(this.storagePath, `${JSON.stringify(leads, null, 2)}\n`, "utf-8");

    return lead;
  }
}
