"use client";

import { useState } from "react";
import Link from "next/link";

// 검사 타입 정의
type TestType = "depression" | "stress" | "anxiety" | "burnout" | null;

// 검사 데이터
const tests = [
  {
    id: "depression",
    title: "우울증 자가진단",
    description: "최근 2주간의 우울 증상을 확인합니다",
    icon: "😔",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: "stress",
    title: "스트레스 진단",
    description: "현재 스트레스 수준을 측정합니다",
    icon: "😰",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    id: "anxiety",
    title: "불안 자가진단",
    description: "불안 증상과 정도를 확인합니다",
    icon: "😨",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    id: "burnout",
    title: "번아웃 진단",
    description: "직업 소진(번아웃) 정도를 측정합니다",
    icon: "🔥",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
];

// 질문 데이터
const questions: Record<string, { question: string; options: string[] }[]> = {
  depression: [
    { question: "일상 활동에 대한 흥미나 즐거움이 거의 없었다", options: ["전혀 아니다", "며칠 동안", "7일 이상", "거의 매일"] },
    { question: "기분이 가라앉거나 우울하거나 희망이 없다고 느꼈다", options: ["전혀 아니다", "며칠 동안", "7일 이상", "거의 매일"] },
    { question: "잠들기 어렵거나 자주 깼다, 혹은 너무 많이 잤다", options: ["전혀 아니다", "며칠 동안", "7일 이상", "거의 매일"] },
    { question: "피곤하고 기력이 거의 없었다", options: ["전혀 아니다", "며칠 동안", "7일 이상", "거의 매일"] },
    { question: "식욕이 줄었거나 과식을 했다", options: ["전혀 아니다", "며칠 동안", "7일 이상", "거의 매일"] },
    { question: "자신을 부정적으로 보거나, 실패자라고 느꼈다", options: ["전혀 아니다", "며칠 동안", "7일 이상", "거의 매일"] },
    { question: "집중하기 어려웠다 (TV 보기, 신문 읽기 등)", options: ["전혀 아니다", "며칠 동안", "7일 이상", "거의 매일"] },
    { question: "말이나 행동이 느려져서 다른 사람들이 알아챌 정도였다", options: ["전혀 아니다", "며칠 동안", "7일 이상", "거의 매일"] },
    { question: "자해하거나 죽는 것이 더 낫다는 생각을 했다", options: ["전혀 아니다", "며칠 동안", "7일 이상", "거의 매일"] },
  ],
  stress: [
    { question: "예상치 못한 일 때문에 당황했던 적이 있다", options: ["전혀 없음", "거의 없음", "가끔", "자주", "매우 자주"] },
    { question: "중요한 일들을 통제할 수 없다고 느꼈다", options: ["전혀 없음", "거의 없음", "가끔", "자주", "매우 자주"] },
    { question: "신경이 예민하고 스트레스를 받았다", options: ["전혀 없음", "거의 없음", "가끔", "자주", "매우 자주"] },
    { question: "개인적인 문제들을 다루는데 자신감이 있었다", options: ["매우 자주", "자주", "가끔", "거의 없음", "전혀 없음"] },
    { question: "일이 뜻대로 진행되고 있다고 느꼈다", options: ["매우 자주", "자주", "가끔", "거의 없음", "전혀 없음"] },
    { question: "필요한 일들을 감당할 수 없다고 생각했다", options: ["전혀 없음", "거의 없음", "가끔", "자주", "매우 자주"] },
    { question: "일상의 짜증스러운 일들을 잘 다룰 수 있었다", options: ["매우 자주", "자주", "가끔", "거의 없음", "전혀 없음"] },
    { question: "생활의 변화를 효과적으로 다루고 있다고 느꼈다", options: ["매우 자주", "자주", "가끔", "거의 없음", "전혀 없음"] },
  ],
  anxiety: [
    { question: "초조하거나 불안하거나 긴장된 느낌", options: ["전혀 없음", "며칠", "7일 이상", "거의 매일"] },
    { question: "걱정을 멈추거나 조절할 수 없음", options: ["전혀 없음", "며칠", "7일 이상", "거의 매일"] },
    { question: "여러 가지 것들에 대해 지나치게 걱정함", options: ["전혀 없음", "며칠", "7일 이상", "거의 매일"] },
    { question: "긴장을 풀기가 어려움", options: ["전혀 없음", "며칠", "7일 이상", "거의 매일"] },
    { question: "너무 안절부절 못해서 가만히 있기 힘듦", options: ["전혀 없음", "며칠", "7일 이상", "거의 매일"] },
    { question: "쉽게 짜증이 나거나 과민해짐", options: ["전혀 없음", "며칠", "7일 이상", "거의 매일"] },
    { question: "마치 끔찍한 일이 일어날 것처럼 두려움", options: ["전혀 없음", "며칠", "7일 이상", "거의 매일"] },
  ],
  burnout: [
    { question: "업무나 학업에 대한 열정이 사라졌다", options: ["전혀 아니다", "가끔", "자주", "항상"] },
    { question: "일이나 학업을 시작하기가 매우 어렵다", options: ["전혀 아니다", "가끔", "자주", "항상"] },
    { question: "일이나 학업에서 성취감을 느끼지 못한다", options: ["전혀 아니다", "가끔", "자주", "항상"] },
    { question: "동료나 고객, 학우들에게 냉소적이 되었다", options: ["전혀 아니다", "가끔", "자주", "항상"] },
    { question: "신체적으로 지치고 피곤하다", options: ["전혀 아니다", "가끔", "자주", "항상"] },
    { question: "집중력이 떨어지고 실수가 잦아졌다", options: ["전혀 아니다", "가끔", "자주", "항상"] },
    { question: "자신의 업무나 학업 능력에 회의감이 든다", options: ["전혀 아니다", "가끔", "자주", "항상"] },
    { question: "사소한 일에도 쉽게 짜증이 난다", options: ["전혀 아니다", "가끔", "자주", "항상"] },
  ],
};

export default function SelfTestPage() {
  const [selectedTest, setSelectedTest] = useState<TestType>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleTestSelect = (testId: string) => {
    setSelectedTest(testId as TestType);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (selectedTest && currentQuestion < questions[selectedTest].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    const maxScore = answers.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage < 25) return { level: "정상", color: "text-green-600", bgColor: "bg-green-50", message: "현재 상태가 양호합니다." };
    if (percentage < 50) return { level: "경미", color: "text-yellow-600", bgColor: "bg-yellow-50", message: "가벼운 증상이 있습니다. 관심을 가지고 관찰해보세요." };
    if (percentage < 75) return { level: "중등도", color: "text-orange-600", bgColor: "bg-orange-50", message: "전문가 상담을 권장합니다." };
    return { level: "심각", color: "text-red-600", bgColor: "bg-red-50", message: "전문가의 도움이 필요합니다." };
  };

  const resetTest = () => {
    setSelectedTest(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  // 검사 선택 화면
  if (!selectedTest) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-toss-50 pb-12 sm:pb-20 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 헤더 */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
              자가진단 테스트
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray-700">
              나의 현재 상태를 점검하고 필요한 도움을 찾아보세요
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-toss-50 text-toss-600 rounded-full text-sm font-medium">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              검사 시간: 약 3-5분
            </div>
          </div>

          {/* 검사 카드 그리드 */}
          <div className="grid md:grid-cols-2 gap-6">
            {tests.map((test) => (
              <button
                key={test.id}
                onClick={() => handleTestSelect(test.id)}
                className="bg-white rounded-2xl p-8 shadow-toss hover:shadow-toss-lg transition-all hover:-translate-y-1 text-left"
              >
                <div className={`w-16 h-16 ${test.bgColor} rounded-2xl flex items-center justify-center text-3xl mb-4`}>
                  {test.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {test.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {test.description}
                </p>
                <div className="flex items-center text-toss-600 font-semibold">
                  시작하기
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* 안내 문구 */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">📌 검사 전 안내사항</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-toss-500 mt-1">•</span>
                <span>이 검사는 전문적인 진단이 아닌 <strong>자가 점검 도구</strong>입니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-toss-500 mt-1">•</span>
                <span>최근 2주간의 경험을 바탕으로 <strong>솔직하게</strong> 답변해주세요.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-toss-500 mt-1">•</span>
                <span>결과가 심각하게 나온 경우 <strong>전문가 상담</strong>을 권장합니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-toss-500 mt-1">•</span>
                <span>검사 결과는 저장되지 않으며, 개인정보가 수집되지 않습니다.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  const currentTest = tests.find(t => t.id === selectedTest)!;
  const currentQuestions = questions[selectedTest];

  // 결과 화면
  if (showResult) {
    const result = calculateResult();
    const totalScore = answers.reduce((sum, score) => sum + score, 0);

    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-toss-50 pb-20" style={{ paddingTop: '80px' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-toss-lg">
            {/* 결과 헤더 */}
            <div className="text-center mb-8">
              <div className={`inline-flex w-24 h-24 ${result.bgColor} rounded-full items-center justify-center text-5xl mb-6`}>
                {currentTest.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                검사 완료
              </h2>
              <p className="text-gray-600">
                {currentTest.title} 결과입니다
              </p>
            </div>

            {/* 점수 */}
            <div className="text-center mb-8 p-6 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-2">총점</div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {totalScore}점
              </div>
              <div className="text-sm text-gray-500">
                (만점: {answers.length * 3}점)
              </div>
            </div>

            {/* 결과 판정 */}
            <div className={`p-6 ${result.bgColor} rounded-xl mb-8`}>
              <div className="text-center">
                <div className={`text-2xl font-bold ${result.color} mb-2`}>
                  {result.level}
                </div>
                <p className="text-gray-700">
                  {result.message}
                </p>
              </div>
            </div>

            {/* 권장사항 */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">💡 권장사항</h3>
              <ul className="space-y-3 text-gray-700">
                {result.level === "심각" || result.level === "중등도" ? (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-toss-500 mt-1">•</span>
                      <span>전문가와의 상담을 통해 정확한 진단과 도움을 받으시기 바랍니다.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-toss-500 mt-1">•</span>
                      <span>증상이 지속되거나 악화되는 경우 즉시 전문의와 상담하세요.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-toss-500 mt-1">•</span>
                      <span>현재 상태를 유지하기 위해 규칙적인 생활 패턴을 유지하세요.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-toss-500 mt-1">•</span>
                      <span>스트레스 관리와 충분한 휴식을 취하세요.</span>
                    </li>
                  </>
                )}
                <li className="flex items-start gap-2">
                  <span className="text-toss-500 mt-1">•</span>
                  <span>정기적인 자가 점검을 통해 변화를 확인하세요.</span>
                </li>
              </ul>
            </div>

            {/* 버튼 */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={resetTest}
                className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
              >
                다른 검사 하기
              </button>
              <Link
                href="/consult"
                className="flex-1 py-4 bg-toss-500 text-white text-center rounded-xl font-bold hover:bg-toss-600 transition-colors shadow-md"
              >
                전문가 상담 신청
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 질문 화면
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-toss-50 pb-20" style={{ paddingTop: '80px' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 진행바 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              {currentTest.title}
            </span>
            <span className="text-sm font-bold text-toss-600">
              {currentQuestion + 1} / {currentQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`bg-gradient-to-r ${currentTest.color} h-2 rounded-full transition-all duration-300`}
              style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* 질문 카드 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-toss-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
            {currentQuestions[currentQuestion].question}
          </h2>

          {/* 답변 옵션 */}
          <div className="space-y-3">
            {currentQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-5 text-left border-2 border-gray-200 rounded-xl hover:border-toss-500 hover:bg-toss-50 transition-all font-medium text-gray-700 hover:text-toss-600"
              >
                <span className="inline-block w-8 h-8 bg-gray-100 rounded-full text-center leading-8 text-sm font-bold mr-3 text-gray-600">
                  {index + 1}
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* 뒤로가기 버튼 */}
        <div className="mt-6 text-center">
          <button
            onClick={resetTest}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            ← 검사 선택으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}


