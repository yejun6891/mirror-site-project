const transportResearch = [
  {
    title: "남양주 제2경춘연결 고속화도로 민간투자사업 정책석 분석(AHP) 용역, 동부건설(주)",
    date: "2024-05-30",
  },
  {
    title: "도시철도 2호선 연장(오산이어역) 민간투자사업 최초제안 기본설계 용역, 삼성건설(주)",
    date: "2024-05-30",
  },
  {
    title: "배업업 교통영향교통체계 구축 방안 마련 연구, 국토교통부(2023)",
    date: "2024-05-30",
  },
  {
    title: "대중교통 이용 및 운행실태조사, 한국교통안전공단(2023)",
    date: "2024-05-30",
  },
  {
    title: "인천시 화물차 교통시고 요인분석 및 안전대책에 관한 연구, 인천물류연구원(2022)",
    date: "2024-05-30",
  },
];

const logisticsResearch = [
  {
    title: "2024년 지역형 스마트 물류팀조성사업 구축 기본 계획 및 실증 연구 용역, 한국지능정보사회진흥원",
    date: "2024-05-30",
  },
  {
    title: "남양주 제2경춘연결 고속화도로 민간투자사업 정책석 분석(AHP) 용역, 동부건설(주)",
    date: "2024-05-30",
  },
  {
    title: "수산물 콜드체인 모니터링 프로세스 개발에 관한 연구, 한국식품연구원(2023)",
    date: "2024-05-30",
  },
  {
    title: "컴타디어 플랫폼스팀 현대화 마스터플랜 및 물류선진시스템 사업구축사업, 국토교통부",
    date: "2024-05-30",
  },
  {
    title: "포스트물류우 온실가스 배출 산정 및 감축 전략 수립, 포스트물류우 주식회사(2023)",
    date: "2024-05-30",
  },
];

export const ResearchIntro = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium mb-2 uppercase tracking-wider">Research Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">연구 소개</h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            미래를 여는 혁신적인 교통 물류 연구<br />
            교통 물류에 대한 창의적이고 전략적인 솔루션을 모색합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* 교통 연구 */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 pb-4 border-b-2 border-primary">
              교통 연구
            </h3>
            <div className="space-y-4">
              {transportResearch.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-4 p-4 hover:bg-background rounded-lg transition-colors cursor-pointer group"
                >
                  <p className="text-foreground group-hover:text-primary transition-colors flex-1">
                    {item.title}
                  </p>
                  <span className="text-muted-foreground text-sm whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="text-primary hover:text-accent font-medium transition-colors">
                + 더보기
              </button>
            </div>
          </div>

          {/* 물류 연구 */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 pb-4 border-b-2 border-primary">
              물류 연구
            </h3>
            <div className="space-y-4">
              {logisticsResearch.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-4 p-4 hover:bg-background rounded-lg transition-colors cursor-pointer group"
                >
                  <p className="text-foreground group-hover:text-primary transition-colors flex-1">
                    {item.title}
                  </p>
                  <span className="text-muted-foreground text-sm whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="text-primary hover:text-accent font-medium transition-colors">
                + 더보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
