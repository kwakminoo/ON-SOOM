import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* 로고/제목 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">로그인</h1>
          <p className="text-gray-600">ON ː SOOM에 오신 것을 환영합니다</p>
        </div>

        {/* 로그인 폼 */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                <span className="ml-2 text-sm text-gray-600">로그인 상태 유지</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-900">
                비밀번호 찾기
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              로그인
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              계정이 없으신가요?{" "}
              <Link href="/signup" className="text-gray-900 font-medium hover:underline">
                회원가입
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}


