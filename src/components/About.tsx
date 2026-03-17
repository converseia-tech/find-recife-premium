import fotoConsultorio from "@/assets/foto_consultorio1.jpeg";

const About = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] gold-frame">
            <img
              src={fotoConsultorio}
              alt="Interior do consultório FIND Recife"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase">Sobre a FIND</p>
            <h2 className="text-3xl lg:text-5xl font-display text-foreground">
              Onde a ciência encontra o cuidado humano
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                A FIND Recife foi fundada pelos doutores José Emannuel e Ítalo Bruno com o 
                propósito de oferecer um atendimento inovador em fisioterapia regenerativa.
              </p>
              <p>
                Com foco no cuidado especializado da dor músculo-esquelética, oferecemos 
                um tratamento moderno, preciso e humanizado — porque acreditamos que cada 
                paciente é único.
              </p>
              <p>
                Nossa missão vai além dos sintomas: promovemos saúde, bem-estar, movimento 
                e qualidade de vida de forma sustentável.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { value: "2+", label: "Anos de atuação" },
                { value: "100%", label: "Personalizado" },
                { value: "∞", label: "Compromisso" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-primary">{stat.value}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
