const serviceGroups = [
  {
    category: "Avaliação e Diagnóstico",
    services: [
      { name: "Consulta Especializada", desc: "Avaliação clínica detalhada para definição do melhor plano terapêutico." },
      { name: "Avaliação Termográfica", desc: "Mapeamento térmico do corpo para identificar alterações funcionais com precisão." },
    ],
  },
  {
    category: "Fisioterapia e Reabilitação",
    services: [
      { name: "Dor Músculo-esquelética", desc: "Tratamento direcionado para alívio e resolução de dores articulares e musculares." },
      { name: "Reabilitação Funcional", desc: "Recuperação de movimentos e funcionalidade após lesões ou cirurgias." },
      { name: "Fisioterapia Pós-AVC", desc: "Protocolos especializados para reabilitação neurológica funcional." },
    ],
  },
  {
    category: "Fisioterapia Regenerativa",
    services: [
      { name: "Protocolos Regenerativos", desc: "Estímulo à regeneração natural dos tecidos com técnicas avançadas." },
      { name: "Tratamento com Autólogos", desc: "Uso de materiais biológicos do próprio paciente para potencializar a cura." },
      { name: "Processo Regenerativo com PRP", desc: "Plasma rico em plaquetas para acelerar a recuperação tecidual." },
    ],
  },
  {
    category: "Terapias Complementares",
    services: [
      { name: "Terapia Neural", desc: "Tratamento de dor e inflamação por meio de regulação do sistema nervoso." },
      { name: "Ozonioterapia", desc: "Ação anti-inflamatória e analgésica através do ozônio medicinal." },
      { name: "Intradermoterapia", desc: "Aplicação localizada de substâncias terapêuticas para alívio de dor." },
      { name: "Infiltração", desc: "Procedimento minimamente invasivo para tratamento preciso de dores articulares." },
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
                      href="https://wa.me/5581999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1"
                    >
                      Agendar →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
