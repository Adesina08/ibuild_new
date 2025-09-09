import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import StepsSection from "@/components/StepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <ProjectsSection />
        <StepsSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
