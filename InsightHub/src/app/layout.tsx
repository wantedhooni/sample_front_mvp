import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InsightHub",
  description:
    "검색 유입, 콘텐츠 탐색, 북마크, 유료 전환 흐름을 데모하는 구독형 리서치/뉴스 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-[#171717]">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(217,119,87,0.12),_transparent_34%),radial-gradient(circle_at_80%_0%,_rgba(76,122,109,0.12),_transparent_22%),linear-gradient(180deg,_#f5efe6_0%,_#fbf8f2_48%,_#efe4d7_100%)]" />
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
