const serviceGroups = [
  {
    category: "Avaliação e Diagnóstico",
    image: "/servicos_tratamentos_especializados/doctor-helping-patient-rehabilitation.jpg",
    imageAlt: "Profissional auxiliando paciente em avaliação clínica",
    services: [
      { name: "Consulta Especializada", desc: "Avaliação clínica detalhada para definição do melhor plano terapêutico." },
      { name: "Avaliação Termográfica", desc: "Mapeamento térmico do corpo para identificar alterações funcionais com precisão." },
    ],
  },
  {
    category: "Fisioterapia e Reabilitação",
    image: "/servicos_tratamentos_especializados/doctor-helping-patient-rehabilitation.jpg",
    imageAlt: "Fisioterapeuta auxiliando paciente em reabilitação",
    services: [
      { name: "Dor Músculo-esquelética", desc: "Tratamento direcionado para alívio e resolução de dores articulares e musculares." },
      { name: "Reabilitação Funcional", desc: "Recuperação de movimentos e funcionalidade após lesões ou cirurgias." },
    ],
  },
  {
    category: "Procedimentos Regenerativos",
    image: "/servicos_tratamentos_especializados/side-view-healthcare-professional-injecting-neck.jpg",
    imageAlt: "Profissional aplicando procedimento regenerativo",
    services: [
      { name: "Protocolos Regenerativos", desc: "Estímulo à regeneração natural dos tecidos com técnicas avançadas." },
      { name: "Processo Regenerativo com iPRF", desc: "Desinflamação da cápsula articular com plasma rico em plaquetas e fibrina." },
      { name: "Protocolos Regenerativos Direcionados", desc: "Estratégias terapêuticas personalizadas para estimular a recuperação natural." },
    ],
  },
  {
    category: "Tratamentos para Coluna",
    image: "/servicos_tratamentos_especializados/physiotherapist-places-needles-female-patient-back-therapy-dryneedling-session.jpg",
    imageAlt: "Fisioterapeuta realizando procedimento terapêutico na coluna",
    services: [
      { name: "Dor Lombar e Cervical", desc: "Protocolos especializados para alívio e resolução de dores na coluna." },
      { name: "Disfunções Funcionais da Coluna", desc: "Avaliação e tratamento das disfunções que comprometem a mobilidade vertebral." },
      { name: "Dor Músculo-esquelética com Ênfase em Coluna", desc: "Abordagem integrada focada na origem da dor e na recuperação funcional." },
    ],
  },
  {
    category: "Tratamentos para Joelho",
    image: "/servicos_tratamentos_especializados/doctor-using-machine-treat-patients-shoulders.jpg",
    imageAlt: "Tratamento fisioterapêutico com equipamento especializado",
    services: [
      { name: "Viscossuplementação para Artrose", desc: "Reposição do líquido sinovial para reduzir dor e melhorar a mobilidade articular." },
      { name: "Condromalácia e Tendinite Patelar", desc: "Tratamento específico para lesões da cartilagem e tendão do joelho." },
      { name: "Tratamento Combinado para Artrose Grau 3", desc: "Protocolo avançado para casos de artrose de maior complexidade." },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceGroups.map((group) => (
            <div
              key={group.category}
              className="group overflow-hidden rounded-3xl bg-card shadow-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Image with reveal effect */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={group.image}
                  alt={group.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.35] brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/75 via-card/10 to-transparent" />
                <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-widest uppercase text-white bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {group.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {group.services.map((service) => (
                  <div key={service.name} className="group/item flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-body font-semibold text-sm text-foreground group-hover/item:text-primary transition-colors duration-200">
                        {service.name}
                      </h4>
                      <p className="font-body text-xs text-muted-foreground mt-1">{service.desc}</p>
                    </div>
                    <a
                      href="https://wa.me/558194251583"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs font-mono text-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 mt-1"
                    >
                      Agendar →
                    </a>
                  </div>
                ))}
                {/* Accent bar que cresce da esquerda ao hover do card */}
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
