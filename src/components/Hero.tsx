import drEmanuel from "@/assets/foto_dr_emanuel.jpeg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[85vh]">
          {/* Left - Content (60%) */}
          <div className="lg:col-span-3 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[12px] bg-secondary font-mono text-xs text-muted-foreground tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Especialistas em Termografia Clínica
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.05] text-foreground">
              Fisioterapia Regenerativa com{" "}
              <em className="text-gradient-gold not-italic">Precisão</em>,{" "}
              Tecnologia e Cuidado Individualizado
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl font-body">
              Tratamento especializado para dor músculo-esquelética, joelho e coluna. 
              Recupere movimento e qualidade de vida com segurança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
              <a
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-base shadow-gold hover:scale-[1.02] transition-all duration-200"
              >
                Agendar Avaliação
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[12px] border border-border text-foreground font-body font-semibold text-base hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                Conheça Nossos Serviços
              </a>
            </div>
          </div>

          {/* Right - Image (40%) */}
          <div className="lg:col-span-2 relative animate-fade-up-delay-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[600px]">
              <img
                src={drEmanuel}
                alt="Dr. Emmanuel - Fisioterapeuta da FIND Recife"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-background rounded-[16px] shadow-card p-4 animate-fade-up-delay-3">
              <p className="font-mono text-xs text-muted-foreground">Fundada por</p>
              <p className="font-body font-semibold text-sm text-foreground">Dr. José Emannuel & Dr. Ítalo Bruno</p>
              <p className="font-mono text-xs text-primary mt-1">Fisioterapia Regenerativa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
