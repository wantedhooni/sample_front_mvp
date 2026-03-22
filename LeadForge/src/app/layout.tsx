import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "LeadForge | 브랜드 사이트와 문의 전환을 한 화면에서",
  description:
    "LeadForge는 브랜드 랜딩, 기능 소개, 가격 정책, 문의 리드 수집, 블로그까지 한 번에 운영하는 리드 수집형 SaaS입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[var(--color-ink)] text-[var(--color-paper)] antialiased">
        {children}
      </body>
    </html>
  );
}
