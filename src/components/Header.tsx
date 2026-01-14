import { Button } from "@/components/ui/button";
import smiiLogo from "@/assets/smiiLogo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4" style={{ height: '110px' }}>
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={smiiLogo} alt="E-UM Logo" style={{ height: '200px',marginTop:'12px' }} className="w-auto" />
          <div className="flex flex-col w-[300px] leading-tight">
  <span className="block w-full text-lg font-bold text-foreground">
    스마트모빌리티혁신연구소
  </span>
  <span className="block w-full text-sm text-muted-foreground">
    Smart Mobility Innovation Institute
  </span>
</div>



        </a>

        
      </div>
    </header>
  );
};
