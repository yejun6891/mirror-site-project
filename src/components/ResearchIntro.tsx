const researchAreas = [
  {
    title: "스마트 모빌리티 기술 개발 및 연구",
    description: "자율주행, 커넥티드카, MaaS 등 미래 모빌리티 기술 연구",
  },
  {
    title: "무장애 이동 환경 연구 및 자문",
    description: "교통약자를 위한 접근성 향상 및 이동권 보장 연구",
  },
  {
    title: "이동권 불균형 해소",
    description: "지역 간, 계층 간 이동 격차 해소를 위한 정책 연구",
  },
  {
    title: "사회적 협력 및 파트너십 구축",
    description: "정부, 기업, 지역사회와의 협력 네트워크 구축",
  },
  {
    title: "국제적 협력 및 기술 교류",
    description: "글로벌 모빌리티 트렌드 연구 및 국제 협력",
  },
  {
    title: "사회적 가치 창출",
    description: "지속 가능한 모빌리티를 통한 사회적 가치 실현",
  },
];

export const ResearchIntro = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium mb-2 uppercase tracking-wider">Research Areas</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">연구분야</h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Mobility for All. No Limits. No Barriers.<br />
            모든 사람이, 어떠한 제약 없이, 자유롭고 평등하게 이동할 수 있는 세상을 만듭니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
