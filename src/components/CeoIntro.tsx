import ceoProfile from "@/assets/ceo-profile.png";
import certificate from "@/assets/certificate.jpg";
import { Award, BookOpen, Users, Quote, GraduationCap, Briefcase } from "lucide-react";

export const CeoIntro = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium mb-2 uppercase tracking-wider">CEO Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">대표 소개</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* CEO Image */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                  <img
                    src={ceoProfile}
                    alt="정연탁 대표"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap">
                  정연탁 박사
                </div>
              </div>
              <div className="mt-8 text-center space-y-1">
                <p className="text-foreground font-semibold">Ph.D Jeong, Yeon Tak</p>
                <p className="text-muted-foreground">스마트모빌리티혁신연구소 대표</p>
              </div>
              
              {/* Degree & Expertise */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">공학박사</span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">스마트 모빌리티</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">지능형교통체계</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">스마트도시</span>
              </div>
              
              {/* Certificate Image - Below expertise */}
              <div className="mt-8">
                <img 
                  src={certificate} 
                  alt="지방행정의 달인 인증패" 
                  className="w-56 h-auto rounded-lg shadow-xl border border-border mx-auto"
                />
              </div>
            </div>

            {/* CEO Info */}
            <div className="space-y-5">
              {/* Slogan */}
              <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xl font-semibold text-foreground italic">
                      "모든 사람이, 어떠한 제약 없이, 자유롭고 평등하게 이동할 수 있는 세상을 만들자."
                    </p>
                    <p className="text-primary font-medium mt-2">
                      Mobility for All. No Limits. No Barriers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Career */}
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">주요 경력</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-[90px]">2003~2007</span>
                    <span>부산발전연구원(BDI, 현 부산연구원, 교통연구부)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-[90px]">2007~2022</span>
                    <div className="flex flex-col">
                      <span>부산광역시</span>
                      <span>(교통기획과, 교통운영과, 교통정보서비스센터, 공공교통정책과)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-[90px]">2022~2025</span>
                    <span>울산광역시(스마트도시과, 스마트모빌리티팀장)</span>
                  </li>
                </ul>
              </div>

              {/* Academic Activities */}
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">학회 활동</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-primary mb-2">現</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>대한교통학회, 대한토목학회, 한국ITS학회, 한국도로학회 정회원</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>대한교통학회 부산울산경남지회 이사, 한국ITS학회 평의원</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>국토교통과학기술진흥원 R&D 평가・기술평가・녹색기술 심사위원</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground mb-2">前</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>울산경남지역혁신플랫폼 스마트공동체사업단 산학협력위원</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>대한교통학회 「교통기술과 정책」 제16대 편집위원회 위원</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>한국도로공사 기술평가위원</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>부산과학기술기획평가원 이슈발굴위원회 위원</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>해운대구 교통정책자문위원회 위원</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">수상 내역</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-[80px]">2018. 12</span>
                    <span>국가사회발전 기여 (국무총리 표창 제201203호)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-[80px]">2018. 12</span>
                    <span>제8회 지방행정의 달인 (지방행정의 달인 2018-2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-[80px]">2017. 12</span>
                    <span>종합감사 수범공무원 (부산광역시장 표창 제6491호)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-[80px]">2016. 09</span>
                    <span>제21회 지방정보통신 우수사례 (행정자치부장관 상장 제116-1114)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-[80px]">2014. 12</span>
                    <span>정부모범공무원 제83968호</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium min-w-[80px]">2010. 12</span>
                    <span>2010 ITS세계대회 유공 (부산광역시장 표창 제5807호)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
