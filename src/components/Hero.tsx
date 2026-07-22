import fotoPacientes from "@/assets/foto_pacientes.jpeg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={fotoPacientes}
          alt="Fisioterapeuta da FIND Recife avaliando e atendendo pacientes durante sessão de fisioterapia"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-28 pb-14 lg:pt-24 lg:pb-10 relative z-10">
        <div className="max-w-lg space-y-5 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display leading-[1.15] text-foreground">
            Fisioterapia em <em className="text-gradient-gold not-italic">Recife</em> para aliviar dores e recuperar seus movimentos
          </h1>

          <p className="text-base lg:text-lg text-muted-foreground max-w-md font-body">
            Atendimento para dor na coluna, joelho, lesões, pós-operatório e reabilitação.
            Fale com a equipe da FIND e veja o melhor tratamento para o seu caso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2 pt-1">
            <a
              href="https://wa.me/558194251583"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-glow inline-flex items-center justify-center px-8 py-4 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-base shadow-gold hover:scale-[1.02] transition-all duration-200"
            >
              Agendar avaliação pelo WhatsApp
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
