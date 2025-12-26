import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">E-UM</div>
            <div className="h-8 w-px bg-primary/30" />
            <div className="text-base leading-tight text-foreground">
              <div className="font-bold">이음모빌리티혁신연구소</div>
              <div className="text-xs text-muted-foreground">E-UM Mobility Innovation Research Institute</div>
            </div>
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
