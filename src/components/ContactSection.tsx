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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.5807698!2d129.12888!3d35.16937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb2f8c7dd9c9%3A0x3e8d7f5d5d5d5d5d!2z67aA7IKw6rSR7Jet7IucIOyVoOyatOuMgOq1rCDshLzthoTshJzroZwgMzA!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="미래모빌리티정책연구소 위치"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              미래모빌리티정책연구소
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">주소</p>
                  <p className="text-muted-foreground">
                    부산광역시 해운대구 센텀서로 30 케이엔엔타워 26층, 미래모빌리티정책연구소
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
