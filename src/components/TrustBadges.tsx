import { CheckCircle2 } from "lucide-react";

const badges = [
  "Fisioterapia em Recife",
  "Avaliação individual",
  "Tratamentos para coluna, joelho e lesões",
  "Agendamento pelo WhatsApp",
];

const TrustBadges = () => {
  return (
    <section className="border-y border-border bg-secondary/60 py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((badge) => (
            <li key={badge} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground/80">{badge}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBadges;
