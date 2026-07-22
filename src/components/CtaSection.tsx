const CtaSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-dark-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-display text-dark-surface-foreground">
            Dê o primeiro passo para{" "}
            <em className="text-gradient-gold not-italic">tratar sua dor</em>
          </h2>
          <p className="text-lg text-dark-surface-foreground/60 font-body max-w-xl mx-auto">
            Fale com a equipe da FIND, explique seu caso e agende uma avaliação para entender
            qual tratamento faz mais sentido para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/558194251583"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-glow inline-flex items-center justify-center px-8 py-4 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-base shadow-gold hover:scale-[1.02] transition-all duration-200"
            >
              Agendar avaliação agora
            </a>
            <a
              href="https://wa.me/558194251583"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[12px] border border-dark-surface-foreground/20 text-dark-surface-foreground font-body font-semibold text-base hover:border-primary/50 transition-all duration-200"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
