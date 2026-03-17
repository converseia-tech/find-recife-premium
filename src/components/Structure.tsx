import fotoConsultorio1 from "@/assets/foto_consultorio1.jpeg";
import fotoFrente from "@/assets/foto_frente.jpeg";
import fotoPaisagem from "@/assets/foto_paisagem.jpeg";
import fotoEstruturaFisio from "@/assets/foto_estrutura_fisio.jpeg";
import fotoConsultorio2 from "@/assets/foto_consultorio2.jpeg";

const Structure = () => {
  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Estrutura</p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            Um ambiente pensado para sua recuperação
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden gold-frame relative">
            <img src={fotoFrente} alt="Fachada FIND Recife" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden gold-frame">
            <img src={fotoConsultorio1} alt="Consultório" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden gold-frame">
            <img src={fotoPaisagem} alt="Vista do consultório" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden gold-frame">
            <img src={fotoEstruturaFisio} alt="Sala de fisioterapia" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden gold-frame">
            <img src={fotoConsultorio2} alt="Escritório clínico" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
