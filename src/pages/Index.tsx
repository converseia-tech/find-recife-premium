import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import KneeSpine from "@/components/KneeSpine";
import Thermography from "@/components/Thermography";
import Structure from "@/components/Structure";
import Professional from "@/components/Professional";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Differentials />
      <Services />
      <KneeSpine />
      <Thermography />
      <Structure />
      <Professional />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
