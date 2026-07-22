const steps = [
  {
    number: 1,
    title: "Você chama no WhatsApp",
    desc: "A equipe entende sua dor e orienta o melhor horário.",
  },
  {
    number: 2,
    title: "Você passa por uma avaliação",
    desc: "O fisioterapeuta avalia seu caso, seus movimentos e sua necessidade.",
  },
  {
    number: 3,
    title: "Você recebe a indicação do tratamento",
    desc: "Depois da avaliação, a equipe explica o melhor caminho para sua recuperação.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            Como funciona o atendimento na FIND
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-bold text-base mb-5 shadow-sm">
                {step.number}
              </span>
              <h3 className="font-display text-xl text-foreground mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/558194251583"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow inline-flex items-center justify-center px-8 py-4 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-base shadow-gold hover:scale-[1.02] transition-all duration-200"
          >
            Agendar avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
