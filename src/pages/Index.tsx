import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import PainPoints from "@/components/PainPoints";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import HowItWorks from "@/components/HowItWorks";
import Structure from "@/components/Structure";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBadges />
      <PainPoints />
      <Services />
      <Differentials />
      <HowItWorks />
      <About />
      <Structure />
      <Testimonials />
      <Faq />
      <CtaSection />
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default Index;
