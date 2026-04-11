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

const galleryImages: Record<Tab, { src: string; alt: string }[]> = {
  Joelho: [
    {
      src: "/novas_midias_site_find/tratamento_joelho/dr_emanuel_aplicando_no_joelho.jpeg",
      alt: "Dr. Emanuel aplicando tratamento regenerativo no joelho",
    },
    {
      src: "/novas_midias_site_find/tratamento_joelho/dr_emanuel_com_seringas_de_liquidos_retirados_do_joelho.jpeg",
      alt: "Seringas com líquido sinovial retirado da articulação",
    },
    {
      src: "/novas_midias_site_find/tratamento_joelho/liquido_retirado_joelho.jpeg",
      alt: "Resultado do procedimento: líquido retirado do joelho",
    },
  ],
  Coluna: [
    {
      src: "/novas_midias_site_find/tratamento_coluna/aplicacao_infiltracao_coluna_paciente.jpeg",
      alt: "Aplicação de infiltração terapêutica na coluna do paciente",
    },
    {
      src: "/novas_midias_site_find/tratamento_coluna/aplicacao_infiltracao_coluna_paciente3.jpeg",
      alt: "Procedimento de infiltração regenerativa na coluna",
    },
    {
      src: "/novas_midias_site_find/tratamento_coluna/aplicacao_infiltracao_paciente_coluna1.jpeg",
      alt: "Infiltração direcionada na coluna do paciente",
    },
  ],
};

const services = [
  {
    category: "Joelho",
    items: [
      "Viscossuplementação para artrose",
      "Tratamento combinado para artrose grau 3",
      "Desinflamação da cápsula articular com iPRF",
      "Condromalácia e tendinite patelar",
    ],
  },
  {
    category: "Coluna",
    items: [
      "Dor músculo-esquelética com ênfase em coluna",
      "Dor lombar e cervical",
      "Disfunções funcionais da coluna",
      "Protocolos regenerativos direcionados",
    ],
  },
];

const KneeSpine = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Joelho");
  const [imgIndex, setImgIndex] = useState(0);

  const handleTab = (tab: Tab) => {
    setActiveTab(tab);
    setImgIndex(0);
  };

  const currentImages = galleryImages[activeTab];
  const prev = () => setImgIndex((i) => (i - 1 + currentImages.length) % currentImages.length);
  const next = () => setImgIndex((i) => (i + 1) % currentImages.length);

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Gallery */}
          <div className="space-y-4">
            {/* Tab selector */}
            <div className="flex gap-2">
              {(["Joelho", "Coluna"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Image carousel */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
              <img
                key={`${activeTab}-${imgIndex}`}
                src={currentImages[imgIndex].src}
                alt={currentImages[imgIndex].alt}
                loading="lazy"
                className="w-full h-full object-cover saturate-[0.8] transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Caption */}
              <p className="absolute bottom-14 left-4 right-4 font-mono text-[10px] text-white/70 leading-relaxed">
                {currentImages[imgIndex].alt}
              </p>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {currentImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    aria-label={`Imagem ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === imgIndex ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="absolute right-3 bottom-3 flex gap-1.5">
                <button
                  onClick={prev}
                  aria-label="Imagem anterior"
                  className="w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Próxima imagem"
                  className="w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {currentImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setImgIndex(i)}
                  aria-label={`Ver ${img.alt}`}
                  className={`relative shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    i === imgIndex ? "border-primary shadow-gold" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
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
