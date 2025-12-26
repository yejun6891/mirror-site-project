import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ResearchIntro } from "@/components/ResearchIntro";
import { CeoIntro } from "@/components/CeoIntro";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ResearchIntro />
        <CeoIntro />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
