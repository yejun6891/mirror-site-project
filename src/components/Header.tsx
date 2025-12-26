import { Button } from "@/components/ui/button";
import eumLogo from "@/assets/eum-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={eumLogo} alt="E-UM Mobility Innovation Institute" className="h-20 w-auto" />
        </a>

        {/* Contact Button */}
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          온라인 문의
        </Button>
      </div>
    </header>
  );
};
