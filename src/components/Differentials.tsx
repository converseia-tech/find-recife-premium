import { Scan, Activity, Target, UserCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import fotoEstrutura from "@/assets/foto_estrutura3.jpeg";

const differentials = [
  {
    number: 1,
    icon: Scan,
    badge: "Único em Recife",
    title: "Termografia Infravermelha",
    desc: "Diagnóstico funcional de alta precisão, sem radiação. Enxergamos o que o exame convencional não mostra.",
  },
  {
    number: 2,
    icon: Activity,
    badge: "Sem cirurgia",
    title: "Fisioterapia Regenerativa",
    desc: "Protocolos com iPRF — células do próprio paciente — para regenerar tecidos e eliminar a dor na origem.",
  },
  {
    number: 3,
    icon: Target,
    badge: "Foco total",
    title: "Especialistas em Joelho e Coluna",
    desc: "Não fazemos de tudo. Fazemos muito bem o que mais dói — com profundidade e resultados mensuráveis.",
  },
  {
    number: 4,
    icon: UserCheck,
    badge: "Sem protocolo genérico",
    title: "Plano 100% Individual",
    desc: "Cada caso é único. Cada tratamento também. Nenhum paciente sai daqui com uma receita padrão.",
  },
];

// 2 cards per page → 2 pages
const TOTAL_PAGES = 2;

const Differentials = () => {
  const [page, setPage] = useState(0);

  // Auto-play every 4.5s
  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % TOTAL_PAGES), 4500);
    return () => clearInterval(id);
  }, []);

  const prev = () => setPage((p) => (p - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  const next = () => setPage((p) => (p + 1) % TOTAL_PAGES);

  const pair = differentials.slice(page * 2, page * 2 + 2);

  return (
    <section id="diferenciais" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">Diferenciais</p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground mb-4">
            Por que escolher a FIND?
          </h2>
          <p className="font-body text-base text-muted-foreground">
            4 razões objetivas. Nenhuma genérica.
          </p>
        </div>

        {/* Carousel — 2 cards side by side */}
        <div className="flex flex-col items-center gap-8">

          <div key={page} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl animate-fade-up">
            {pair.map((item) => (
              <div
                key={item.number}
                className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 shadow-[var(--shadow-card-hover)]"
              >
                {/* Visible number badge */}
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-bold text-base mb-5 shadow-sm">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={22} strokeWidth={1.5} className="text-primary" />
                </div>

                {/* Badge */}
                <span className="inline-block text-[10px] font-mono font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                  {item.badge}
                </span>

                {/* Content */}
                <h3 className="font-display text-xl text-foreground mb-2 leading-snug">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots (2 pages) */}
            <div className="flex items-center gap-2">
              {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Página ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === page
                      ? "w-6 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── Regenerative physio block ─────────────────────────── */}
        <div className="mt-20 rounded-3xl bg-dark-surface overflow-hidden relative">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Image side */}
            <div className="relative min-h-[280px] lg:min-h-0 order-1">
              <img
                src="/servicos_tratamentos_especializados/side-view-healthcare-professional-injecting-neck.jpg"
                alt="Aplicação de tratamento regenerativo na FIND Recife"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(197,160,89,0.15)]" />
            </div>

            {/* Text side */}
            <div className="p-10 lg:p-14 space-y-6 flex flex-col justify-center order-2">
              <p className="font-mono text-xs text-primary tracking-widest uppercase">Diferencial</p>
              <h3 className="text-2xl lg:text-4xl font-display text-dark-surface-foreground leading-snug">
                Fisioterapia regenerativa explicada de um jeito simples
              </h3>
              <p className="text-dark-surface-foreground/70 font-body text-sm leading-relaxed">
                Na prática, a fisioterapia regenerativa busca ajudar seu corpo a se recuperar
                melhor, com técnicas e recursos que apoiam a melhora da dor, da mobilidade e
                da função.
              </p>
              <a
                href="https://wa.me/558194251583"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
              >
                Quero saber mais
              </a>
            </div>
          </div>
        </div>

        {/* ── Thermography block ────────────────────────────────── */}
        <div className="mt-20 rounded-3xl bg-dark-surface overflow-hidden relative">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Text side */}
            <div className="p-10 lg:p-14 space-y-6 flex flex-col justify-center">
              <p className="font-mono text-xs text-primary tracking-widest uppercase">Tecnologia</p>
              <h3 className="text-2xl lg:text-4xl font-display text-dark-surface-foreground leading-snug">
                O que os olhos não veem,<br className="hidden lg:block" /> a FIND detecta
              </h3>
              <div className="space-y-4 text-dark-surface-foreground/70 font-body text-sm leading-relaxed">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image side */}
            <div className="relative min-h-[280px] lg:min-h-0">
              <img
                src={fotoEstrutura}
                alt="Equipamento de termografia FIND Recife"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(197,160,89,0.15)]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Differentials;
