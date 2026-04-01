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

      <div className="container mx-auto px-4 lg:px-8 pt-28 pb-14 lg:pt-24 lg:pb-10 relative z-10">
        <div className="max-w-lg space-y-5 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display leading-[1.15] text-foreground">
            <span className="block">Fisioterapia Regenerativa com <em className="text-gradient-gold not-italic">Precisão</em>,</span>
            <span className="block">Tecnologia e Cuidado Individualizado.</span>
          </h1>

          <p className="text-base lg:text-lg text-muted-foreground max-w-md font-body">
            Tratamento especializado para dor músculo-esquelética, joelho e coluna.
            Recupere movimento e qualidade de vida com segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2 pt-1">
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
