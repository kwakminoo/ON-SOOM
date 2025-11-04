"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

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

interface User {
  username: string;
  name: string;
  role: "user" | "admin";
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const headerRef = useRef<HTMLDivElement>(null);

  // 로그인 상태 확인
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [pathname]);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 로그아웃 처리
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      localStorage.removeItem("user");
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const baseNavigation: MenuItem[] = [
    {
      name: "온숨소개",
      subMenu: [
        { name: "온숨 스토리", href: "/about/story" },
        { name: "기업이념", href: "/about/vision" },
        { name: "온숨의 공간", href: "/about/centers" },
      ],
    },
    {
      name: "프로그램",
      subMenu: [
        { name: "프로그램 안내", href: "/programs" },
        { name: "온라인 신청", href: "/programs/apply" },
      ],
    },
    {
      name: "기업용",
      subMenu: [
        { name: "기업", href: "/business/corporate" },
        { name: "교육기관", href: "/business/education" },
        { name: "강연 및 세미나", href: "/business/seminar" },
      ],
    },
    {
      name: "커뮤니티",
      subMenu: [
        { name: "공지사항", href: "/community/notice" },
        { name: "FAQ", href: "/community/faq" },
        { name: "자가진단", href: "/community/self-test" },
      ],
    },
  ];

  // 관리자인 경우 관리자 메뉴 추가
  const navigation: MenuItem[] =
    user?.role === "admin"
      ? [
          ...baseNavigation,
          {
            name: "관리자",
            subMenu: [{ name: "게시판", href: "/admin/board" }],
          },
        ]
      : baseNavigation;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      if (pathname !== "/") {
        window.location.href = `/${href}`;
      } else {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
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
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ONSOOM_Logo.png"
              alt="ONSOOM 온숨 심리상담센터"
              width={150}
              height={50}
              className="h-8 md:h-10 lg:h-8 w-auto object-contain"
              priority
              unoptimized
            />
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
                    className="text-gray-700 hover:text-toss-500 text-xs md:text-sm lg:text-base font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="text-gray-700 hover:text-toss-500 text-xs md:text-sm lg:text-base font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                )}

                {/* 드롭다운 메뉴 - 애니메이션 효과 추가 */}
                {item.subMenu && openDropdown === item.name && (
                  <div
                    className="absolute left-0 top-full mt-2 w-max bg-white border border-gray-100 rounded-lg shadow-toss-lg overflow-hidden animate-slideDown"
                    style={{
                      animation: "slideDown 0.3s ease-out forwards",
                    }}
                  >
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={(e) => handleClick(e, subItem.href)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-toss-50 hover:text-toss-600 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* 로그인/로그아웃 */}
            <div className="flex items-center gap-6 lg:gap-8 xl:gap-10 ml-4 pl-4 border-l border-gray-200">
              {user ? (
                <>
                  <span className="text-gray-700 text-xs md:text-sm lg:text-base font-medium">
                    {user.name}님
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-toss-500 text-xs md:text-sm lg:text-base font-medium transition-colors"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-toss-500 text-xs md:text-sm lg:text-base font-medium transition-colors"
                  >
                    로그인
                  </Link>
                  {/* <Link
                    href="/signup"
                    className="text-gray-700 hover:text-toss-500 text-xs md:text-sm lg:text-base font-medium transition-colors"
                  >
                    회원가입
                  </Link> */}
                </>
              )}
            </div>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-toss-500 hover:bg-toss-50 rounded-lg transition-colors"
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 네비게이션 */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className={index === navigation.length - 1 ? "mt-1" : ""}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href!)}
                      className={`block text-gray-900 text-base font-light py-4 px-4 ${
                        index === navigation.length - 1
                          ? ""
                          : "border-b border-gray-100"
                      } hover:bg-gray-50 transition-colors`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setOpenMobileMenu(
                            openMobileMenu === item.name ? null : item.name
                          )
                        }
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

              {/* 모바일 로그인/로그아웃 */}
              <div className="flex gap-2 px-4 pb-6 pt-6 border-t border-gray-200">
                {user ? (
                  <>
                    <div className="flex-1 text-center py-2.5 text-gray-700 text-sm font-medium border border-gray-300 rounded-lg bg-gray-50">
                      {user.name}님
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex-1 text-center py-2.5 text-gray-700 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      로그아웃
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="flex-1 text-center py-2.5 text-gray-700 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      로그인
                    </Link>
                    {/* <Link
                      href="/signup"
                      className="flex-1 text-center py-2.5 text-gray-700 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      회원가입
                    </Link> */}
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
