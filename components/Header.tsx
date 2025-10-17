"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navigation = [
    { name: "기업이념", href: "#vision" },
    { name: "프로그램 안내", href: "#programs" },
    { name: "F&Q", href: "/faq" },
    { name: "문의사항", href: "/consult" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // 현재 페이지가 메인 페이지가 아니면 메인 페이지로 이동
      if (pathname !== '/') {
        window.location.href = `/${href}`;
      } else {
        // 메인 페이지에 있으면 해당 섹션으로 스크롤
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80; // 헤더 높이
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
    setIsMenuOpen(false); // 모바일 메뉴 닫기
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* 메인 헤더 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-900 tracking-tight">ON:SOOM</h1>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 xl:space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-gray-600 hover:text-gray-900 text-xs md:text-sm lg:text-base font-light transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900"
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 네비게이션 */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-gray-900 text-base font-light py-4 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

