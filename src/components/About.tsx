import drEmanuel from "@/assets/foto_dr_emanuel.jpeg";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 space-y-24">

        {/* — Bloco 1: Sobre a Clínica — */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] gold-frame">
            <img
              src="/dr. emanuel e italo.jpg"
              alt="Dr. Emanuel e Dr. Italo, fundadores da FIND Recife"
              className="w-full h-full object-cover object-[center_12%] md:object-[center_30%] scale-[1.08]"
            />
          </div>

          <div className="space-y-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase">Sobre a FIND</p>
            <h2 className="text-3xl lg:text-5xl font-display text-foreground">
              Onde a ciência encontra o cuidado humano
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                A FIND Recife foi fundada pelos doutores José Emannuel e Ítalo Bruno com o
                propósito de oferecer um atendimento inovador em fisioterapia regenerativa.
              </p>
              <p>
                Com foco no cuidado especializado da dor músculo-esquelética, oferecemos
                um tratamento moderno, preciso e humanizado — porque acreditamos que cada
                paciente é único.
              </p>
              <p>
                Nossa missão vai além dos sintomas: promovemos saúde, bem-estar, movimento
                e qualidade de vida de forma sustentável.
              </p>
            </div>
            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-4">
              {[
                { value: "2+", label: "Anos de atuação" },
                { value: "100%", label: "Personalizado" },
                { value: "∞", label: "Compromisso" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-700 ease-out ${
                    statsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 160}ms` }}
                >
                  <p className="font-display text-3xl text-primary">{stat.value}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/60" />

        {/* — Bloco 2: Quem Somos — */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase">Quem Somos</p>
            <h2 className="text-3xl lg:text-4xl font-display text-foreground">
              Compromisso com a excelência clínica
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                A FIND Recife é conduzida pelos doutores José Emannuel e Ítalo Bruno,
                profissionais dedicados à fisioterapia regenerativa e ao tratamento
                especializado da dor músculo-esquelética.
              </p>
              <p>
                Com formação técnica sólida e visão humanizada, os fundadores construíram
                uma clínica que une tecnologia de ponta, protocolos individualizados e um
                cuidado genuíno com cada paciente.
              </p>
            </div>
            <a
              href="https://wa.me/558194251583"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
            >
              Falar com a FIND
            </a>
          </div>

          <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[500px] gold-frame">
            <img
              src={drEmanuel}
              alt="Dr. José Emannuel e Dr. Ítalo Bruno - Fundadores da FIND Recife"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
