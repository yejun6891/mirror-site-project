import researchPlanning from "@/assets/research-planning.jpg";
import researchPapers from "@/assets/research-papers.jpg";
import researchDocument from "@/assets/research-document.jpg";

const researchItems = [
  {
    image: researchPlanning,
    title: "주요 연구과제",
  },
  {
    image: researchPapers,
    title: "국제학회지논문",
  },
  {
    image: researchDocument,
    title: "국내학회지논문",
  },
];

export const ResearchResults = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium mb-2 uppercase tracking-wider">Research Results</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">연구 실적</h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            새로운 지식, 혁신적인 기술, 현실적인 해결책<br />
            지속적인 도전과 혁신을 통해 미래의 교통 물류를 위한 지식과 기술을 쌓아가고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {researchItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end">
                <h3 className="text-white text-2xl font-bold p-6 w-full">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
