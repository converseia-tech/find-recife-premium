import fotoPacientes from "@/assets/foto_pacientes.jpeg";

const kneeServices = [
  "Viscossuplementação para artrose",
  "Tratamento combinado para artrose grau 3",
  "Desinflamação da cápsula articular com iPRF",
  "Condromalácia e tendinite patelar",
];

const spineServices = [
  "Dor músculo-esquelética com ênfase em coluna",
  "Dor lombar e cervical",
  "Disfunções funcionais da coluna",
  "Protocolos regenerativos direcionados",
];

const KneeSpine = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Especialidades</p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            Atenção especial para <em className="text-gradient-gold not-italic">joelho</em> e{" "}
            <em className="text-gradient-gold not-italic">coluna</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Joelho */}
          <div className="rounded-3xl overflow-hidden shadow-card bg-card">
            <div className="relative h-56 overflow-hidden">
              <img src={fotoPacientes} alt="Fisioterapia para joelho" className="w-full h-full object-cover saturate-[0.7]" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <h3 className="absolute bottom-6 left-8 font-display text-3xl text-foreground">Joelho</h3>
            </div>
            <div className="p-8 space-y-4">
              {kneeServices.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="font-body text-sm text-muted-foreground">{s}</p>
                </div>
              ))}
              <a
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 px-6 py-3 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
              >
                Agendar Avaliação
              </a>
            </div>
          </div>

          {/* Coluna */}
          <div className="rounded-3xl overflow-hidden shadow-card bg-card">
            <div className="relative h-56 overflow-hidden">
              <img src={fotoPacientes} alt="Fisioterapia para coluna" className="w-full h-full object-cover object-right saturate-[0.7]" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <h3 className="absolute bottom-6 left-8 font-display text-3xl text-foreground">Coluna</h3>
            </div>
            <div className="p-8 space-y-4">
              {spineServices.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="font-body text-sm text-muted-foreground">{s}</p>
                </div>
              ))}
              <a
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 px-6 py-3 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
              >
                Agendar Avaliação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KneeSpine;
