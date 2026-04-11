import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const joelhoPhotos = [
  { src: "/novas_midias_site_find/tratamento_joelho/dr_emanuel_aplicando_no_joelho.jpeg", alt: "Dr. Emanuel aplicando tratamento no joelho" },
  { src: "/novas_midias_site_find/tratamento_joelho/dr_emanuel_com_seringas_de_liquidos_retirados_do_joelho.jpeg", alt: "Seringas com líquido sinovial extraído" },
  { src: "/novas_midias_site_find/tratamento_joelho/liquido_retirado_joelho.jpeg", alt: "Resultado: líquido drenado do joelho" },
];

const colunaPhotos = [
  { src: "/novas_midias_site_find/tratamento_coluna/aplicacao_infiltracao_coluna_paciente3.jpeg", alt: "Aplicação de infiltração na coluna lombar" },
  { src: "/novas_midias_site_find/tratamento_coluna/aplicacao_infiltracao_coluna_paciente.jpeg", alt: "Infiltração terapêutica na coluna" },
  { src: "/novas_midias_site_find/tratamento_coluna/aplicacao_infiltracao_paciente_coluna1.jpeg", alt: "Infiltração vertebral direcionada" },
];

const joelhoServices = [
  { name: "Viscossuplementação para Artrose", desc: "Reposição do líquido sinovial para reduzir dor e melhorar a mobilidade articular." },
  { name: "Condromalácia e Tendinite Patelar", desc: "Tratamento específico para lesões da cartilagem e tendão do joelho." },
  { name: "Tratamento Combinado para Artrose Grau 3", desc: "Protocolo avançado para casos de artrose de maior complexidade." },
  { name: "Desinflamação da Cápsula Articular com iPRF", desc: "Regeneração articular com plasma rico em plaquetas e fibrina." },
];

const colunaServices = [
  { name: "Dor Lombar e Cervical", desc: "Protocolos especializados para alívio e resolução de dores na coluna." },
  { name: "Disfunções Funcionais da Coluna", desc: "Avaliação e tratamento das disfunções que comprometem a mobilidade vertebral." },
  { name: "Dor Músculo-esquelética com Ênfase em Coluna", desc: "Abordagem integrada focada na origem da dor e na recuperação funcional." },
];

const otherProcedures = [
  {
    label: "Procedimentos Regenerativos",
    video: "/novas_midias_site_find/Plano_individual/testemunho_paciente_recuperacao_acidente_moto.mp4",
    videoCaption: "Depoimento real — recuperação pós-acidente",
    services: [
      { name: "Protocolos Regenerativos", desc: "Estímulo à regeneração natural dos tecidos." },
      { name: "Processo Regenerativo com iPRF", desc: "Desinflamação articular com plasma rico em plaquetas." },
    ],
  },
  {
    label: "Termografia Infravermelha",
    video: "/novas_midias_site_find/termografia_infra_vermelha/recuperacao_paciente_pata_de_ganco.mp4",
    videoCaption: "Caso real — diagnóstico e recuperação",
    services: [
      { name: "Avaliação Termográfica", desc: "Mapeamento térmico para identificar alterações funcionais invisíveis a olho nu." },
      { name: "Diagnóstico Funcional", desc: "Identificação de inflamações, sobrecargas e desequilíbrios posturais." },
    ],
  },
  {
    label: "Fisioterapia e Reabilitação",
    video: null,
    videoCaption: null,
    image: "/servicos_tratamentos_especializados/doctor-helping-patient-rehabilitation.jpg",
    imageAlt: "Fisioterapeuta auxiliando paciente em reabilitação",
    services: [
      { name: "Dor Músculo-esquelética", desc: "Tratamento direcionado para alívio de dores articulares e musculares." },
      { name: "Reabilitação Funcional", desc: "Recuperação de movimentos após lesões ou cirurgias." },
    ],
  },
];

const ServiceItem = ({ name, desc, idx }: { name: string; desc: string; idx: number }) => (
  <div className="flex gap-3 items-start">
    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center font-mono text-[10px] text-primary font-semibold mt-0.5">
      {String(idx + 1).padStart(2, "0")}
    </span>
    <div>
      <p className="font-body font-semibold text-sm text-foreground">{name}</p>
      <p className="font-body text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Services = () => {
  const [joelhoIdx, setJoelhoIdx] = useState(0);
  const [colunaIdx, setColunaIdx] = useState(0);

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Serviços</p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            Tratamentos especializados
          </h2>
        </div>

        {/* ─── FEATURED: Joelho & Coluna ─── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">

          {/* JOELHO */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-card">
            {/* Primary media — portrait */}
            <div className="relative shrink-0 overflow-hidden bg-black">
              {joelhoIdx === 0 ? (
                <video
                  src="/novas_midias_site_find/fisioterapia%20regenerativa/testemunho_paciente_recuperacao_joelho.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full aspect-video object-cover"
                  aria-label="Depoimento real — recuperação de joelho"
                />
              ) : (
                <img
                  src={joelhoPhotos[joelhoIdx - 1].src}
                  alt={joelhoPhotos[joelhoIdx - 1].alt}
                  loading="lazy"
                  className="w-full aspect-video object-cover transition-opacity duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Thumbnails: video first, then photos */}
            <div className="flex gap-2 px-4 pt-3">
              {/* Video thumbnail */}
              <button
                onClick={() => setJoelhoIdx(0)}
                aria-label="Ver vídeo do tratamento"
                className={`relative flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-muted border-2 transition-all duration-200 flex items-center justify-center ${
                  joelhoIdx === 0 ? "border-primary shadow-gold" : "border-transparent opacity-60 hover:opacity-90"
                }`}
              >
                <video
                  src="/novas_midias_site_find/fisioterapia%20regenerativa/testemunho_paciente_recuperacao_joelho.mp4"
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-foreground fill-current ml-0.5" viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg>
                  </span>
                </span>
              </button>
              {/* Photo thumbnails */}
              {joelhoPhotos.map((p, i) => (
                <button
                  key={p.src}
                  onClick={() => setJoelhoIdx(i + 1)}
                  aria-label={p.alt}
                  className={`relative flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-muted border-2 transition-all duration-200 ${
                    joelhoIdx === i + 1 ? "border-primary shadow-gold" : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
            {/* Content */}
            <div className="flex flex-col flex-1 gap-5 p-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Especialidade
                </span>
                <h3 className="font-display text-2xl text-foreground mt-3">
                  Tratamentos para <em className="text-gradient-gold not-italic">Joelho</em>
                </h3>
              </div>
              <div className="space-y-3 flex-1">
                {joelhoServices.map((s, i) => <ServiceItem key={s.name} name={s.name} desc={s.desc} idx={i} />)}
              </div>
              <a
                href="https://wa.me/558194251583"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
              >
                Agendar Avaliação →
              </a>
            </div>
          </div>

          {/* COLUNA */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-card">
            {/* Primary photo — portrait, full display */}
            <div className="relative shrink-0 overflow-hidden bg-black">
              <img
                src={colunaPhotos[colunaIdx].src}
                alt={colunaPhotos[colunaIdx].alt}
                loading="lazy"
                className="w-full aspect-video object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Secondary thumbnails — object-contain for full framing */}
            <div className="flex gap-2 px-4 pt-3">
              {colunaPhotos.map((p, i) => (
                <button
                  key={p.src}
                  onClick={() => setColunaIdx(i)}
                  aria-label={p.alt}
                  className={`relative flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-muted border-2 transition-all duration-200 ${
                    i === colunaIdx ? "border-primary shadow-gold" : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
            {/* Content */}
            <div className="flex flex-col flex-1 gap-5 p-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Especialidade
                </span>
                <h3 className="font-display text-2xl text-foreground mt-3">
                  Tratamentos para <em className="text-gradient-gold not-italic">Coluna</em>
                </h3>
              </div>
              <div className="space-y-3 flex-1">
                {colunaServices.map((s, i) => <ServiceItem key={s.name} name={s.name} desc={s.desc} idx={i} />)}
              </div>
              <a
                href="https://wa.me/558194251583"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
              >
                Agendar Avaliação →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border" />
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase shrink-0">
            Demais procedimentos
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* ─── OTHER PROCEDURES ─── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProcedures.map((group) => (
            <div
              key={group.label}
              className="group flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Media */}
              <div className="shrink-0 bg-black overflow-hidden">
                {group.video ? (
                  <video
                    src={group.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full aspect-video object-cover"
                    aria-label={group.videoCaption ?? group.label}
                  />
                ) : (
                  <img
                    src={(group as { image?: string }).image ?? ""}
                    alt={(group as { imageAlt?: string }).imageAlt ?? group.label}
                    loading="lazy"
                    className="w-full aspect-video object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-4 p-5">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary">
                  {group.label}
                </span>
                <div className="space-y-3 flex-1">
                  {group.services.map((s, i) => <ServiceItem key={s.name} name={s.name} desc={s.desc} idx={i} />)}
                </div>
                <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
