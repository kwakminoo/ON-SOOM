"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface SubMenuItem {
  name: string;
  href: string;
  subItems?: SubMenuItem[];
}

interface MenuItem {
  name: string;
  href?: string;
  subMenu?: SubMenuItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const navigation: MenuItem[] = [
    {
      name: "온숨소개",
      subMenu: [
        { name: "온숨 스토리", href: "/about/story" },
        { name: "기업이념", href: "/about/vision" },
        { name: "센터별 안내", href: "/about/centers" },
      ]
    },
    {
      name: "프로그램",
      subMenu: [
        { name: "프로그램 안내", href: "/programs" },
        { name: "자가진단", href: "/programs/self-test" },
        { name: "온라인 신청", href: "/programs/apply" },
        { name: "기업 상담", href: "/programs/corporate" },
        { name: "교육기관 상담", href: "/programs/education" },
        { name: "강연 및 세미나", href: "/programs/seminar" },
      ]
    },
    {
      name: "커뮤니티",
      subMenu: [
        { name: "공지사항", href: "/community/notice" },
        { name: "FAQ", href: "/community/faq" },
      ]
    },
    { name: "신청하기", href: "/consult" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      if (pathname !== '/') {
        window.location.href = `/${href}`;
      } else {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileMenu(null);
  };

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-900 tracking-tight">ON:SOOM</h1>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subMenu && setOpenDropdown(item.name)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href!)}
                    className="text-gray-600 hover:text-gray-900 text-xs md:text-sm lg:text-base font-light transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="text-gray-600 hover:text-gray-900 text-xs md:text-sm lg:text-base font-light transition-colors"
                  >
                    {item.name}
                  </button>
                )}

                {/* 드롭다운 메뉴 - 애니메이션 효과 추가 */}
                {item.subMenu && openDropdown === item.name && (
                  <div 
                    className="absolute left-0 top-full mt-2 w-max bg-white border border-gray-200 shadow-lg overflow-hidden animate-slideDown"
                    style={{
                      animation: 'slideDown 0.3s ease-out forwards'
                    }}
                  >
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={(e) => handleClick(e, subItem.href)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* 로그인/회원가입 */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 text-xs md:text-sm font-light transition-colors"
              >
                로그인
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-gray-900 text-white text-xs md:text-sm font-light rounded-md hover:bg-gray-800 transition-colors"
              >
                회원가입
              </Link>
            </div>
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
                <div key={item.name}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href!)}
                      className="text-gray-900 text-base font-light py-4 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setOpenMobileMenu(openMobileMenu === item.name ? null : item.name)}
                        className="w-full text-left text-gray-900 text-base font-light py-4 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        {item.name}
                      </button>
                      {openMobileMenu === item.name && item.subMenu && (
                        <div className="bg-gray-50 animate-slideDown">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => handleClick(e, subItem.href)}
                              className="block px-8 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              
              {/* 모바일 로그인/회원가입 */}
              <div className="flex flex-col gap-2 p-4 bg-gray-50">
                <Link
                  href="/login"
                  className="text-center py-2 text-gray-900 text-sm font-light border border-gray-300 rounded-md hover:bg-white transition-colors"
                >
                  로그인
                </Link>
                <Link
                  href="/signup"
                  className="text-center py-2 bg-gray-900 text-white text-sm font-light rounded-md hover:bg-gray-800 transition-colors"
                >
                  회원가입
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

