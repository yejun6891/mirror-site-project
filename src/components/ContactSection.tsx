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
          <div className="rounded-lg overflow-hidden h-[400px] border">
            <iframe
              src="https://www.google.com/maps/place/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C+%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC+APEC%EB%A1%9C+17/data=!3m1!4b1!4m6!3m5!1s0x356892c796ffda13:0xe97d24f278635b12!8m2!3d35.1659653!4d129.1323746!16s%2Fg%2F11bzj3lgh_?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="스마트모빌리티혁신연구소 위치"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              스마트모빌리티혁신연구소
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">주소</p>
                  <p className="text-muted-foreground">
                    부산광역시 해운대구 APEC로 17 (우동 센텀리더스마크) 21층 2103호, 스마트모빌리티혁신연구소
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">전화번호</p>
                  <p className="text-muted-foreground">+82-10-8649-6891</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-muted-foreground">spulse@naver.com</p>
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
