import { Button } from "@/components/ui/button";
import eumLogo from "@/assets/eum-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4" style={{ height: '110px' }}>
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={eumLogo} alt="E-UM Logo" style={{ height: '80px' }} className="w-auto" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">이음모빌리티혁신연구소라개</span>
            <span className="text-xs text-muted-foreground">E-UM Mobility Innovation Institute</span>
          </div>
        </a>

        {/* Contact Button */}
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          온라인 문의
        </Button>
      </div>
    </header>
  );
};
