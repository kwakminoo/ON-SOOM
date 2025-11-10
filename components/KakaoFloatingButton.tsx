"use client";

const KakaoFloatingButton = () => {
  const handleClick = () => {
    // 카카오톡 채널 1:1 채팅 URL
    // 방법 1: 직접 채팅방으로 이동 (권장)
    const kakaoChannelUrl =
      process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || "https://open.kakao.com/o/s6VnLJYh";
    
    // 방법 2: 채널 홈으로 이동 후 채팅 버튼 클릭 유도
    // const kakaoChannelUrl = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || "http://pf.kakao.com/_xjAxexj";
    
    window.open(kakaoChannelUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#FEE500] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="카카오톡 상담"
    >
      {/* 카카오톡 아이콘 */}
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C6.477 3 2 6.477 2 10.75C2 13.407 3.675 15.755 6.202 17.131L5.25 20.598C5.173 20.857 5.406 21.095 5.657 20.988L9.849 18.786C10.548 18.925 11.267 19 12 19C17.523 19 22 15.523 22 11.25C22 6.977 17.523 3 12 3Z"
          fill="#3C1E1E"
        />
      </svg>

      {/* 호버 시 툴팁 */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        카카오톡 상담
      </span>
    </button>
  );
};

export default KakaoFloatingButton;


