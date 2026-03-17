import { Scan, Heart, Activity, Bone, Sparkles, Shield, UserCheck, Cpu } from "lucide-react";

const differentials = [
  { icon: UserCheck, title: "Avaliação Personalizada", desc: "Cada paciente recebe um plano terapêutico único, baseado em suas necessidades individuais." },
  { icon: Scan, title: "Exame Termográfico", desc: "Tecnologia infravermelha de alta precisão para diagnóstico funcional não invasivo." },
  { icon: Heart, title: "Atendimento Humanizado", desc: "Cuidado centrado no paciente, com escuta ativa e acolhimento em cada etapa." },
  { icon: Activity, title: "Fisioterapia Regenerativa", desc: "Protocolos avançados que estimulam a regeneração natural dos tecidos." },
  { icon: Bone, title: "Foco em Joelho e Coluna", desc: "Especialização nos tratamentos mais demandados da ortopedia funcional." },
  { icon: Shield, title: "Estrutura Moderna", desc: "Ambiente equipado com tecnologia de ponta para sua segurança e conforto." },
  { icon: Sparkles, title: "Protocolos Individualizados", desc: "Estratégias terapêuticas sob medida para resultados mais eficazes." },
  { icon: Cpu, title: "Tecnologia no Diagnóstico", desc: "Ferramentas avançadas que ampliam a precisão na identificação de disfunções." },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Diferenciais</p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            Por que escolher a FIND?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 bg-card"
            >
              <div className="w-12 h-12 rounded-[12px] bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon size={22} strokeWidth={1} className="text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
