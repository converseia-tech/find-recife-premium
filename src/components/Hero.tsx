import fotoPaisagem from "@/assets/foto_paisagem.jpeg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={fotoPaisagem}
          alt="FIND Recife - Clínica de Fisioterapia Regenerativa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-16 lg:pt-0 lg:pb-0 relative z-10">
        <div className="max-w-3xl space-y-8 animate-fade-up min-h-[85vh] flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[12px] bg-secondary font-mono text-xs text-muted-foreground tracking-wide w-fit">
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
              href="https://wa.me/558194251583"
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

          <div className="pt-4 animate-fade-up-delay-3">
            <p className="font-mono text-xs text-muted-foreground">Fundada por</p>
            <p className="font-body font-semibold text-sm text-foreground">Dr. José Emannuel & Dr. Ítalo Bruno</p>
            <p className="font-mono text-xs text-primary mt-1">Fisioterapia Regenerativa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
