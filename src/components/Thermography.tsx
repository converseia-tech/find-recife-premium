import fotoEstrutura from "@/assets/foto_estrutura3.jpeg";

const Thermography = () => {
  return (
    <section className="bg-dark-surface py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase">Tecnologia</p>
            <h2 className="text-3xl lg:text-5xl font-display text-dark-surface-foreground">
              O que os olhos não veem, a FIND detecta
            </h2>
            <div className="space-y-4 text-dark-surface-foreground/70 font-body text-base leading-relaxed">
              <p>
                O exame termográfico é um diferencial competitivo da FIND. Utilizando 
                câmeras infravermelhas de alta precisão, realizamos mapeamentos térmicos 
                que revelam alterações funcionais invisíveis a olho nu.
              </p>
              <p>
                Um exame não invasivo que identifica inflamações, sobrecargas musculares, 
                disfunções articulares e desequilíbrios posturais — auxiliando no 
                diagnóstico e na definição da melhor estratégia terapêutica.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 pt-2">
              {["Não invasivo", "Alta precisão", "Acompanhamento evolutivo", "Diagnóstico funcional"].map((item) => (
                <li key={item} className="flex items-center gap-2 font-mono text-xs text-primary">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src={fotoEstrutura}
              alt="Equipamento de termografia FIND Recife"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(197,160,89,0.15)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thermography;
