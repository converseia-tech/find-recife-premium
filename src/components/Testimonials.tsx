import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Cristina Dantas",
    handle: "@cristina.dantas.31",
    text: "Excelente profissional. Excelente atendimento. Excelente tratamento. Fiz e recomendo — não sofram tanto como eu sofri. Procurem logo esses abençoados, vcs não vão se arrepender.",
  },
  {
    name: "Edivaldo Pereira",
    handle: "@edivaldopereiravllela",
    text: "Tratamento ótimo. Fiz infiltração coluna lombar, hérnia de disco, coluna lombar.",
  },
  {
    name: "Regina Célia",
    handle: "@reginacelianevescor",
    text: "Realmente esse tratamento é top! Espero que com o tempo ele se torne mais acessível para todos. 🙏",
  },
  {
    name: "Bruno Cesa",
    handle: "@brunocesa32",
    text: "Meu pai chegou aí sem andar, e hoje está andando sem dores no joelho! Parece um milagre! Graças a Deus e a vcs!! 🙏 Super recomendo — são excelentes profissionais!!",
  },
  {
    name: "Agostinho Nena",
    handle: "@agostinhonena",
    text: "Já fazem 7 meses que fiz e cada dia melhor vai melhorando aos poucos. É um tratamento regenerativo. Parabéns ao Dr. Ítalo e Dr. Manoel.",
  },
  {
    name: "Ana Fátima",
    handle: "@ana.fatima446",
    text: "Eu estou me sentindo muito bem. Obrigado Dr. Emanuel, só tenho a agradecer. Que Deus lhe ilumine. 🙏",
  },
  {
    name: "Thaís",
    handle: "@thais_unhasdegel",
    text: "Minha mãe está muito aliviada 🙌 Recomendo demais esses profissionais.",
  },
  {
    name: "Verynha Sylva",
    handle: "@verynha.sylva",
    text: "Gratidão a Deus e aos nossos especialistas Dr. Ítalo e Dr. Emanuel ❤️",
  },
  {
    name: "Tatiane",
    handle: "@tatiane9763",
    text: "Como filha, vejo os resultados no cotidiano. Fico extremamente satisfeita e agradecida pela atenção, receptividade e principalmente ao Dr. Ítalo e Dr. Emanuel. Ambos são exemplos de excelentes profissionais. Muito obrigado!!!",
  },
  {
    name: "Taty Miguel",
    handle: "@tatymiguel40",
    text: "Profissionais maravilhosos. Graças a Deus e a eles dois, hoje tenho mais possibilidade de me locomover. Cheguei aí que não podia nem andar direito de tanta dor no joelho — hoje estou melhor. Obrigada!",
  },
  {
    name: "Vera Moura",
    handle: "@veramouramatheus18",
    text: "Eu fiz nos dois joelhos, já faz 6 meses e estou bem melhor. Vocês são top!",
  },
  {
    name: "Aluizio Ferreira",
    handle: "@aluizioferreira",
    text: "Passando para agradecer à @findrecife e ao @italomaltez por me ajudar a acabar com as dores no joelho, que me impossibilitaram de correr por longos 2 meses.",
  },
  {
    name: "Cristina Dantas",
    handle: "@cristina.dantas.311",
    text: "Eu fiz e amei. Estou maravilhosamente bem! Super indico o Doutor Emanoel — é maravilhoso. Obrigada por tudo!",
  },
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
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            O que nossos pacientes dizem
          </h2>
        </div>

        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisible().map((t, i) => (
              <div
                key={`${current}-${i}`}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-[var(--shadow-card)] transition-all duration-500"
              >
                <Quote className="w-6 h-6 text-primary opacity-60 shrink-0" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  {t.text}
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="font-body font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="font-mono text-xs text-primary/70 mt-0.5">
                    {t.handle}
                  </p>
                </div>
              </div>
            ))}
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
