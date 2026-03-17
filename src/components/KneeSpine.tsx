import fotoPacientes from "@/assets/foto_pacientes.jpeg";

const services = [
  { category: "Joelho", items: [
    "Viscossuplementação para artrose",
    "Tratamento combinado para artrose grau 3",
    "Desinflamação da cápsula articular com iPRF",
    "Condromalácia e tendinite patelar",
  ]},
  { category: "Coluna", items: [
    "Dor músculo-esquelética com ênfase em coluna",
    "Dor lombar e cervical",
    "Disfunções funcionais da coluna",
    "Protocolos regenerativos direcionados",
  ]},
];

const KneeSpine = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src={fotoPacientes}
              alt="Tratamento especializado para joelho e coluna"
              className="w-full h-full object-cover saturate-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Especialidades</p>
              <h2 className="text-3xl lg:text-5xl font-display text-foreground">
                Atenção especial para{" "}
                <em className="text-gradient-gold not-italic">joelho</em> e{" "}
                <em className="text-gradient-gold not-italic">coluna</em>
              </h2>
            </div>

            <div className="space-y-8">
              {services.map((group) => (
                <div key={group.category}>
                  <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-primary" />
                    {group.category}
                  </h3>
                  <div className="space-y-3 pl-11">
                    {group.items.map((s) => (
                      <div key={s} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="font-body text-sm text-muted-foreground">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

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
      </div>
    </section>
  );
};

export default KneeSpine;
