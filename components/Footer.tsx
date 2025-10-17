import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12 md:py-16">
        {/* 상단 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white font-light text-lg sm:text-xl mb-4 sm:mb-6">ON:SOOM</h3>
            <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              2030 세대의 마음 건강을 위한<br />
              전문 심리상담 서비스
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="text-white font-light mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">서비스</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="/programs/individual" className="hover:text-white transition-colors font-light">개인상담</Link></li>
              <li><Link href="/programs/couple" className="hover:text-white transition-colors font-light">커플상담</Link></li>
              <li><Link href="/programs/family" className="hover:text-white transition-colors font-light">가족상담</Link></li>
              <li><Link href="/tests" className="hover:text-white transition-colors font-light">심리검사</Link></li>
              <li><Link href="/programs/online" className="hover:text-white transition-colors font-light">온라인상담</Link></li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="text-white font-light mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">고객지원</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="/faq" className="hover:text-white transition-colors font-light">자주 묻는 질문</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors font-light">상담 후기</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors font-light">이벤트</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors font-light">전문가 칼럼</Link></li>
              <li><Link href="/consult" className="hover:text-white transition-colors font-light">상담 문의</Link></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-white font-light mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">연락처</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <li>
                        <p className="text-gray-500 text-[10px] sm:text-xs mb-1">전화</p>
                        <p className="text-white font-light text-xs sm:text-sm">02-1234-5678</p>
                      </li>
                      <li>
                        <p className="text-gray-500 text-[10px] sm:text-xs mb-1">이메일</p>
                        <p className="text-white font-light text-xs sm:text-sm">info@onsoom.com</p>
                      </li>
                      <li>
                        <p className="text-gray-500 text-[10px] sm:text-xs mb-1">운영시간</p>
                        <p className="text-white font-light text-xs sm:text-sm">평일 10:00 - 21:00</p>
                        <p className="text-white font-light text-xs sm:text-sm">주말 10:00 - 19:00</p>
                      </li>
            </ul>
          </div>
        </div>

                {/* 하단 섹션 */}
                <div className="border-t border-gray-800 pt-8 sm:pt-10 mt-8 sm:mt-12">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="text-xs sm:text-sm font-light">
                      <p className="mb-1 sm:mb-2">
                        (주)온숨 | 대표: 홍길동 | 사업자등록번호: 123-45-67890
                      </p>
                      <p>
                        서울시 강남구 테헤란로 123, 4층
                      </p>
                      <p>
                        통신판매업신고: 2024-서울강남-01234
                      </p>
                    </div>
                    <div className="flex md:justify-end space-x-6 sm:space-x-8 text-xs sm:text-sm">
                      <Link href="/privacy" className="hover:text-white transition-colors font-light">
                        개인정보처리방침
                      </Link>
                      <Link href="/terms" className="hover:text-white transition-colors font-light">
                        이용약관
                      </Link>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-light">
                    © 2024 ON:SOOM. All rights reserved.
                  </p>
                </div>
      </div>
    </footer>
  );
};

export default Footer;

