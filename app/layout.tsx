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
  title: "ON:SOOM",
  description: "개인 및 기업 교육, 교육기관 강사 파견을 제공하는 교육 컨설팅 전문 기업",
  keywords: "교육컨설팅, 기업교육, 개인교육, 강사파견",
  verification: {
    google: "KBiBcNCSxTrR-ZOkL_2I0357-51NymKD6Wc8b7t1L4o",
  },
  openGraph: {
    title: "ON:SOOM",
    description: "개인 및 기업 교육, 교육기관 강사 파견을 제공하는 교육 컨설팅 전문 기업",
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

