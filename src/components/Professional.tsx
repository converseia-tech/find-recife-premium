import drEmanuel from "@/assets/foto_dr_emanuel.jpeg";

const Professional = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase">Quem Somos</p>
            <h2 className="text-3xl lg:text-5xl font-display text-foreground">
              Compromisso com a excelência clínica
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                A FIND Recife é conduzida pelos doutores José Emannuel e Ítalo Bruno, 
                profissionais dedicados à fisioterapia regenerativa e ao tratamento 
                especializado da dor músculo-esquelética.
              </p>
              <p>
                Com formação técnica sólida e visão humanizada, os fundadores construíram 
                uma clínica que une tecnologia de ponta, protocolos individualizados e um 
                cuidado genuíno com cada paciente.
              </p>
            </div>
            <a
              href="https://wa.me/5581999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
            >
              Falar com a FIND
            </a>
          </div>

          <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[500px] gold-frame">
            <img
              src={drEmanuel}
              alt="Dr. Emmanuel - Fisioterapeuta FIND Recife"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
