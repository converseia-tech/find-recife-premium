import { PersonStanding, Footprints, ArrowUpFromLine, Activity, Dumbbell, RotateCcw } from "lucide-react";

const pains = [
  { icon: PersonStanding, label: "Dor na coluna" },
  { icon: Activity, label: "Dor no joelho" },
  { icon: Footprints, label: "Dor ao caminhar" },
  { icon: ArrowUpFromLine, label: "Dor para subir escadas" },
  { icon: Dumbbell, label: "Lesões musculares" },
  { icon: RotateCcw, label: "Dificuldade para voltar às atividades" },
];

const PainPoints = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            Está sentindo dor e não sabe qual tratamento procurar?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {pains.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon size={20} strokeWidth={1.5} className="text-primary" />
              </div>
              <p className="font-body text-sm font-medium text-foreground">{label}</p>
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
            Quero Atendimento Imediato
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
