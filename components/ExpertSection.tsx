import Link from "next/link";
import Image from "next/image";

const experts = [
  {
    id: 1,
    name: "김하늘 상담사",
    title: "임상심리전문가",
    specialty: "우울·불안·관계",
    experience: "10년",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "이민준 상담사",
    title: "상담심리전문가",
    specialty: "커플·가족·직장",
    experience: "8년",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "박서연 상담사",
    title: "정신건강임상심리사",
    specialty: "진로·자존감·스트레스",
    experience: "7년",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "최지우 상담사",
    title: "임상심리전문가",
    specialty: "성격·정서·심리검사",
    experience: "12년",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop",
  },
];

const ExpertSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            2030 세대를 이해하는
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              전문 상담사
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            풍부한 경험과 전문성을 갖춘 상담사가 함께합니다
          </p>
        </div>

        {/* 전문가 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              {/* 이미지 */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* 정보 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {expert.name}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-3">
                  {expert.title}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>전문분야: {expert.specialty}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>경력: {expert.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/experts"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <span>전문가 목록 살펴보기</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;



