import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Contact US</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Map */}
          <div className="bg-muted/30 rounded-lg overflow-hidden h-[400px] flex items-center justify-center border">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">지도 영역</p>
              <p className="text-sm text-muted-foreground mt-2">
                인천대학교 미추홀캠퍼스 별관 A동 5층
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              TLI 교통물류전략연구소
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">주소</p>
                  <p className="text-muted-foreground">
                    인천광역시 연수구 갯벌로 12, 인천대학교 미추홀캠퍼스 별관 A동 5층
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">전화번호</p>
                  <p className="text-muted-foreground">010-7170-5229</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-muted-foreground">muwi@inu.ac.kr</p>
                </div>
              </div>
            </div>

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground mt-8 px-8 py-6 text-base">
              온라인 문의
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
