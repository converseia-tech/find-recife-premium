import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Instagram, Facebook, Star } from "lucide-react";

type Platform = "instagram" | "facebook" | "whatsapp";

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const platformConfig: Record<Platform, { label: string; iconColor: string; badgeBg: string; icon: React.ElementType | ((p: { size?: number }) => JSX.Element) }> = {
  instagram: { label: "Instagram", iconColor: "text-pink-500", badgeBg: "bg-pink-50 dark:bg-pink-950/40", icon: Instagram },
  facebook:  { label: "Facebook",  iconColor: "text-blue-500", badgeBg: "bg-blue-50 dark:bg-blue-950/40",  icon: Facebook },
  whatsapp:  { label: "WhatsApp",  iconColor: "text-green-500", badgeBg: "bg-green-50 dark:bg-green-950/40", icon: WhatsAppIcon },
};

const testimonials: { name: string; handle: string; text: string; platform: Platform }[] = [
  { platform: "instagram", name: "Cristina Dantas",   handle: "@cristina.dantas.31",      text: "Excelente profissional. Excelente atendimento. Excelente tratamento. Fiz e recomendo — não sofram tanto como eu sofri. Procurem logo esses abençoados, vcs não vão se arrepender." },
  { platform: "facebook",  name: "Edivaldo Pereira",  handle: "@edivaldopereiravllela",   text: "Tratamento ótimo. Fiz infiltração coluna lombar, hérnia de disco, coluna lombar." },
  { platform: "facebook",  name: "Regina Célia",      handle: "@reginacelianevescor",     text: "Realmente esse tratamento é top! Espero que com o tempo ele se torne mais acessível para todos. 🙏" },
  { platform: "whatsapp",  name: "Bruno Cesa",        handle: "@brunocesa32",             text: "Meu pai chegou aí sem andar, e hoje está andando sem dores no joelho! Parece um milagre! Graças a Deus e a vcs!! 🙏 Super recomendo — são excelentes profissionais!!" },
  { platform: "instagram", name: "Agostinho Nena",    handle: "@agostinhonena",           text: "Já fazem 7 meses que fiz e cada dia melhor vai melhorando aos poucos. É um tratamento regenerativo. Parabéns ao Dr. Ítalo e Dr. Manoel." },
  { platform: "whatsapp",  name: "Ana Fátima",        handle: "@ana.fatima446",           text: "Eu estou me sentindo muito bem. Obrigado Dr. Emanuel, só tenho a agradecer. Que Deus lhe ilumine. 🙏" },
  { platform: "instagram", name: "Thaís",             handle: "@thais_unhasdegel",        text: "Minha mãe está muito aliviada 🙌 Recomendo demais esses profissionais." },
  { platform: "whatsapp",  name: "Verynha Sylva",     handle: "@verynha.sylva",           text: "Gratidão a Deus e aos nossos especialistas Dr. Ítalo e Dr. Emanuel ❤️" },
  { platform: "facebook",  name: "Tatiane",           handle: "@tatiane9763",             text: "Como filha, vejo os resultados no cotidiano. Fico extremamente satisfeita e agradecida pela atenção, receptividade e principalmente ao Dr. Ítalo e Dr. Emanuel. Ambos são exemplos de excelentes profissionais. Muito obrigado!!!" },
  { platform: "instagram", name: "Taty Miguel",       handle: "@tatymiguel40",            text: "Profissionais maravilhosos. Graças a Deus e a eles dois, hoje tenho mais possibilidade de me locomover. Cheguei aí que não podia nem andar direito de tanta dor no joelho — hoje estou melhor. Obrigada!" },
  { platform: "whatsapp",  name: "Vera Moura",        handle: "@veramouramatheus18",      text: "Eu fiz nos dois joelhos, já faz 6 meses e estou bem melhor. Vocês são top!" },
  { platform: "instagram", name: "Aluizio Ferreira",  handle: "@aluizioferreira",         text: "Passando para agradecer à @findrecife e ao @italomaltez por me ajudar a acabar com as dores no joelho, que me impossibilitaram de correr por longos 2 meses." },
  { platform: "facebook",  name: "Cristina Dantas",   handle: "@cristina.dantas.311",     text: "Eu fiz e amei. Estou maravilhosamente bem! Super indico o Doutor Emanoel — é maravilhoso. Obrigada por tudo!" },
];

const VISIBLE = 3;
const AUTO_INTERVAL = 4000;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + total) % total);
    resetTimer();
  };

  const next = () => {
    setCurrent((c) => (c + 1) % total);
    resetTimer();
  };

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < VISIBLE; i++) {
      items.push(testimonials[(current + i) % total]);
    }
    return items;
  };

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground mb-4">
            Resultados que falam por si
          </h2>
          <p className="font-body text-base text-muted-foreground">
            Histórias reais de pacientes que recuperaram qualidade de vida com a FIND.
          </p>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-14">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="font-body text-sm font-semibold text-foreground ml-1">5,0</span>
          </div>
          <span className="text-border hidden sm:block">|</span>
          <span className="font-body text-sm text-muted-foreground">
            <strong className="text-foreground">+100</strong> pacientes transformados
          </span>
          <span className="text-border hidden sm:block">|</span>
          <span className="font-body text-sm text-muted-foreground flex items-center gap-1.5">
            Coletados no{" "}
            <span className="inline-flex items-center gap-1 text-pink-500 font-medium"><Instagram size={13} /> Instagram</span>,{" "}
            <span className="inline-flex items-center gap-1 text-blue-500 font-medium"><Facebook size={13} /> Facebook</span>{" "}
            e{" "}
            <span className="inline-flex items-center gap-1 text-green-500 font-medium"><WhatsAppIcon size={13} /> WhatsApp</span>
          </span>
        </div>

        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisible().map((t, i) => {
              const plat = platformConfig[t.platform];
              const PlatIcon = plat.icon as React.ElementType;
              const isCenter = i === 1;
              return (
                <div
                  key={`${current}-${i}`}
                  className={`relative bg-card flex flex-col gap-4 rounded-3xl p-7 transition-all duration-500 shadow-[var(--shadow-card)] ${
                    isCenter
                      ? "border-2 border-primary/30 shadow-[var(--shadow-card-hover)] scale-[1.02] z-10"
                      : "border border-border"
                  }`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-primary opacity-40 shrink-0" />
                  </div>

                  {/* Text */}
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 italic">
                    "{t.text}"
                  </p>

                  {/* Footer */}
                  <div className="pt-3 border-t border-border flex items-center justify-between gap-3">
                    <div>
                      <p className="font-body font-semibold text-sm text-foreground">{t.name}</p>
                      <p className="font-mono text-xs text-muted-foreground/70 mt-0.5">{t.handle}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0 ${plat.badgeBg} ${plat.iconColor}`}>
                      <PlatIcon size={12} />
                      {plat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); resetTimer(); }}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo"
              className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
