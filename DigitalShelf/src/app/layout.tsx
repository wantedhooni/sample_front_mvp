import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/components/providers/cart-provider";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "DigitalShelf",
  description: "디지털 상품 탐색부터 체크아웃까지 시연 가능한 스토어 프론트 MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <CartProvider>
          <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.12),transparent_24%)]" />
            <SiteHeader />
            <main className="relative flex-1">{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
