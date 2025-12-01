import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ResearchResults } from "@/components/ResearchResults";
import { ResearchIntro } from "@/components/ResearchIntro";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ResearchResults />
        <ResearchIntro />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
