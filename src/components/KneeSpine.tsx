const treatments = [
  {
    category: "TRATAMENTO PARA JOELHO",
    items: [
      "Viscossuplementação para artrose",
      "Tratamento combinado para artrose grau 3",
      "Desinflamação da cápsula articular com iPRF",
      "Condromalácia e tendinite patelar",
    ],
    media: [
      { src: "/uploads/acido-hialuronico.jpeg", alt: "Aplicação de ácido hialurônico no joelho", label: "Ácido hialurônico" },
      { src: "/uploads/liquido-retirado-joelho.jpeg", alt: "Profissional segurando seringas com líquido retirado do joelho", label: "Líquido retirado do joelho" },
    ],
  },
  {
    category: "TRATAMENTO PARA COLUNA",
    items: [
      "Dor músculo-esquelética com ênfase em coluna",
      "Dor lombar e cervical",
      "Disfunções funcionais da coluna",
      "Protocolos regenerativos direcionados",
    ],
    media: [
      { src: "/uploads/tratamento-coluna.jpeg", alt: "Atendimento especializado para tratamento de coluna", label: "Tratamento para coluna" },
      { src: "/uploads/tratamento-coluna-2.jpeg", alt: "Procedimento de aplicação na região lombar", label: "Aplicação lombar" },
      { src: "/uploads/tratamento-coluna-3.jpeg", alt: "Detalhe do procedimento terapêutico na coluna", label: "Procedimento em detalhe" },
    ],
  },
];

const KneeSpine = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Especialidades</p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            Atenção especial para <em className="text-gradient-gold not-italic">joelho</em> e{" "}
            <em className="text-gradient-gold not-italic">coluna</em>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {treatments.map((group) => (
            <div key={group.category} className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <h3 className="font-display text-2xl text-foreground mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                {group.category}
              </h3>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="font-body text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div
                className={`mt-8 grid gap-4 ${
                  group.media.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"
                }`}
              >
                {group.media.map((item) => (
                  <div key={item.src} className="overflow-hidden rounded-2xl bg-secondary/70 border border-border">
                    <div className="flex items-center justify-center bg-muted/40 h-72">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="px-4 py-3">
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://wa.me/558194251583"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default KneeSpine;
