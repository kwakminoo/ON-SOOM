import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KakaoFloatingButton from "@/components/KakaoFloatingButton";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "ON:SOOM - 2030 세대를 위한 심리상담",
  description: "2030 세대의 마음 건강을 위한 전문 심리상담 서비스. 온라인/오프라인 상담, 심리검사, 커플/가족 상담을 제공합니다.",
  keywords: "심리상담, 2030상담, 청년상담, 커플상담, 심리검사, 온라인상담",
  openGraph: {
    title: "ON:SOOM",
    description: "2030 세대의 마음 건강을 위한 전문 심리상담 서비스",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${pretendard.className} relative`}>
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <KakaoFloatingButton />
      </body>
    </html>
  );
}

