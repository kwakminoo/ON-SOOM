import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-xs sm:text-sm font-light">
            <p className="mb-1 sm:mb-2">
              (주)온숨 | 대표: 정지은 | info@onsoom.com 
            </p>
            <p>
              서울특별시 마포구 서교동 354-8
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
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-500 font-light">
            © 2025 ON:SOOM. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 font-light">
            Designed by{" "}
            <a 
              href="https://www.freepik.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              ON:SOOM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;