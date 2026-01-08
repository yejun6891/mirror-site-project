export const Footer = () => {
  const partners = [
    { name: "경인특별지치도", width: "w-32" },
    { name: "국토교통부", width: "w-32" },
    { name: "(주)에이치에스파트너스그룹", width: "w-40" },
    { name: "ILRS 인천항만물류연구회", width: "w-40" },
    { name: "인천항만공사", width: "w-32" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Partners Section */}
      <div className="bg-muted/10 py-8 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`${partner.width} h-16 bg-white/90 rounded flex items-center justify-center px-4`}
              >
                <span className="text-primary text-sm font-medium text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-sm text-primary-foreground/80 space-y-2">
            <p>
              스마트모빌리티혁신연구소 | 부산광역시 해운대구 APEC로 17 (우동 센텀리더스마크) 21층 2103호
            </p>
            <p>
              대표 : 정연탁 박사 | +82-10-8649-6891 | spulse@naver.com
            </p>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-6">
            @Copyright 2024. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
