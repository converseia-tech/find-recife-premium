type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
};

type ServiceGroup = {
  category: string;
  services: Array<{ name: string; desc: string }>;
  media?: MediaItem[];
};

const serviceGroups: ServiceGroup[] = [
  {
    category: "AVALIAÇÃO e TERMOGRAFIA",
    services: [
      { name: "Consulta Especializada", desc: "Avaliação clínica detalhada para definição do melhor plano terapêutico." },
      { name: "Avaliação Termográfica", desc: "Mapeamento térmico do corpo para identificar alterações funcionais com precisão." },
    ],
    media: [
      { type: "image", src: "/uploads/termografia-antes.jpeg", alt: "Imagem termográfica – avaliação corporal", title: "Termografia" },
      { type: "video", src: "/uploads/termografia-infra-vermelha.mp4", alt: "Vídeo de termografia infra vermelha", title: "Termografia Infra Vermelha" },
    ],
  },
  {
    category: "FISIOTERAPIA E REABILITAÇÃO",
    services: [
      { name: "Dor Músculo-esquelética", desc: "Tratamento direcionado para alívio e resolução de dores articulares e musculares." },
      { name: "Reabilitação Funcional", desc: "Recuperação de movimentos e funcionalidade após lesões ou cirurgias." },
      { name: "Fisioterapia Pós-AVC", desc: "Protocolos especializados para reabilitação neurológica funcional." },
    ],
    media: [
      { type: "image", src: "/uploads/fisio-motora-salao.jpeg", alt: "Salão de fisioterapia motora", title: "Foto da Fisio Motora" },
    ],
  },
  {
    category: "PROCEDIMENTOS REGENERATIVOS",
    services: [
      { name: "Protocolos Regenerativos", desc: "Estímulo à regeneração natural dos tecidos com técnicas avançadas." },
      { name: "Tratamento com Autólogos", desc: "Uso de materiais biológicos do próprio paciente para potencializar a cura." },
      { name: "Processo Regenerativo com PRP", desc: "Plasma rico em plaquetas para acelerar a recuperação tecidual." },
    ],
    media: [
      { type: "image", src: "/uploads/prp-tubo.jpeg", alt: "Material regenerativo preparado para procedimento", title: "Procedimento Regenerativo" },
      { type: "video", src: "/uploads/fisioterapia-regenerativa.mp4", alt: "Vídeo sobre fisioterapia regenerativa", title: "Fisioterapia Regenerativa" },
    ],
  },
  {
    category: "PLANO INDIVIDUAL",
    services: [
      { name: "Plano Individual", desc: "Conduta personalizada para cada paciente, respeitando histórico, objetivo e evolução." },
    ],
    media: [
      { type: "video", src: "/uploads/plano-individual.mp4", alt: "Vídeo explicativo sobre o plano individual de tratamento", title: "Plano Individual" },
    ],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Serviços</p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            Tratamentos especializados
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {serviceGroups.map((group) => (
            <div key={group.category} className="rounded-3xl bg-card shadow-card p-8">
              <h3 className="font-display text-xl text-foreground mb-6 pb-4 border-b border-border">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.services.map((service) => (
                  <div key={service.name} className="group flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-body font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-200">
                        {service.name}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground mt-1">{service.desc}</p>
                    </div>
                    <a
                      href="https://wa.me/558194251583"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1"
                    >
                      Agendar →
                    </a>
                  </div>
                ))}
              </div>

              {group.media ? (
                <div
                  className={`mt-8 grid gap-4 ${
                    group.media.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"
                  }`}
                >
                  {group.media.map((item) => (
                    <div key={item.src} className="overflow-hidden rounded-2xl border border-border bg-secondary/70">
                      <div className="flex items-center justify-center bg-muted/40 h-64">
                        {item.type === "image" ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <video
                            src={item.src}
                            controls
                            muted
                            playsInline
                            className="max-h-full max-w-full object-contain"
                          />
                        )}
                      </div>
                      <div className="px-4 py-3">
                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
