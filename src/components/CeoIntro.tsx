import ceoProfile from "@/assets/ceo-profile.png";
import { Award, BookOpen, Users, Quote } from "lucide-react";

export const CeoIntro = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium mb-2 uppercase tracking-wider">CEO Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">대표 소개</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* CEO Image */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                  <img
                    src={ceoProfile}
                    alt="정덕탁 대표"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold shadow-lg">
                  정덕탁 박사
                </div>
              </div>
              <p className="mt-8 text-muted-foreground text-center">이음모빌리티혁신연구소 대표</p>
            </div>

            {/* CEO Info */}
            <div className="space-y-8">
              {/* Slogan */}
              <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xl font-semibold text-foreground italic">
                      "사람을 위한 기술, 사람과 기술의 이음"
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Mobility for All. No Limits. No Barriers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Career */}
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">경력</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>이음모빌리티혁신연구소 대표</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>스마트 모빌리티 및 교통 정책 전문가</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>무장애 이동환경 및 이동권 연구</span>
                  </li>
                </ul>
              </div>

              {/* Academic Activities */}
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">학회 활동</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>대한교통학회 회원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>한국ITS학회 회원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>스마트 모빌리티 관련 학술 활동</span>
                  </li>
                </ul>
              </div>

              {/* Awards */}
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">수상 내역</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>모빌리티 혁신 연구 관련 수상</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>교통 정책 연구 공헌 표창</span>
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
