const thermographyHighlights = [
  "Não invasivo",
  "Alta precisão",
  "Acompanhamento evolutivo",
  "Diagnóstico funcional",
];

const thermographyGallery = [
  { src: "/uploads/termografia-antes.jpeg", alt: "Imagem termográfica – avaliação corporal completa" },
  { src: "/uploads/termografia-ombro.jpeg", alt: "Mapeamento termográfico de ombro" },
  { src: "/uploads/termografia-bracos.jpeg", alt: "Análise termográfica de membros superiores" },
  { src: "/uploads/termografia-pes.jpeg", alt: "Análise termográfica plantar" },
];

const Thermography = () => {
  return (
    <section className="bg-dark-surface py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase">Avaliação e Termografia</p>
            <h2 className="text-3xl lg:text-5xl font-display text-dark-surface-foreground">
              O que os olhos não veem, a FIND detecta
            </h2>
            <div className="space-y-4 text-dark-surface-foreground/70 font-body text-base leading-relaxed">
              <p>
                O exame termográfico é um diferencial da FIND. Utilizando câmeras infravermelhas de alta
                precisão, realizamos mapeamentos térmicos que revelam alterações funcionais invisíveis a
                olho nu.
              </p>
              <p>
                É um exame não invasivo que identifica inflamações, sobrecargas musculares, disfunções
                articulares e desequilíbrios posturais, ajudando no diagnóstico e na definição da melhor
                estratégia terapêutica.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 pt-2">
              {thermographyHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 font-mono text-xs text-primary">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-black/40">
              <div className="flex items-center justify-center aspect-[4/3]">
                <video
                  src="/uploads/termografia-infra-vermelha.mp4"
                  controls
                  muted
                  playsInline
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(197,160,89,0.15)]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {thermographyGallery.map((item) => (
                <div key={item.src} className="overflow-hidden rounded-2xl border border-primary/15 bg-black/30">
                  <div className="flex items-center justify-center h-48">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thermography;
