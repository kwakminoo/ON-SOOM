import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} relative`}>
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

