import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">TL</div>
            <div className="h-8 w-px bg-primary/30" />
            <div className="text-base leading-tight text-foreground">
              <div className="font-bold">교통물류전략연구소</div>
              <div className="text-xs text-muted-foreground">Strategy Institute of Transport and Logistics</div>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">회사소개</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-2 p-4">
                    <li><NavigationMenuLink className="block p-2 hover:bg-muted rounded-md">CEO 소개</NavigationMenuLink></li>
                    <li><NavigationMenuLink className="block p-2 hover:bg-muted rounded-md">CEO 연구실적</NavigationMenuLink></li>
                    <li><NavigationMenuLink className="block p-2 hover:bg-muted rounded-md">CEO 위원회 활동</NavigationMenuLink></li>
                    <li><NavigationMenuLink className="block p-2 hover:bg-muted rounded-md">수상이력</NavigationMenuLink></li>
                    <li><NavigationMenuLink className="block p-2 hover:bg-muted rounded-md">오시는길</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#research" className="px-4 py-2 text-base hover:text-accent transition-colors">
                  교통연구
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#research" className="px-4 py-2 text-base hover:text-accent transition-colors">
                  물류연구
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="px-4 py-2 text-base hover:text-accent transition-colors">
                  게시판
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            온라인 문의
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col gap-2 p-4">
            <a href="#company" className="p-2 hover:bg-muted rounded-md">회사소개</a>
            <a href="#research" className="p-2 hover:bg-muted rounded-md">교통연구</a>
            <a href="#research" className="p-2 hover:bg-muted rounded-md">물류연구</a>
            <a href="#contact" className="p-2 hover:bg-muted rounded-md">게시판</a>
            <Button variant="outline" className="mt-2 border-primary text-primary">
              온라인 문의
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
