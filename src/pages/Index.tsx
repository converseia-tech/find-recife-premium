import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import KneeSpine from "@/components/KneeSpine";
import Structure from "@/components/Structure";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <KneeSpine />
      <Structure />
      <Testimonials />
      <CtaSection />
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default Index;
