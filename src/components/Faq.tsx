import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "A FIND atende por convênio ou é particular?",
    answer:
      "O atendimento na FIND é particular. Assim conseguimos manter uma avaliação individual e um plano de tratamento pensado só para o seu caso, sem os limites de protocolos de convênio.",
  },
  {
    question: "Preciso fazer avaliação antes de começar?",
    answer:
      "Sim. Toda jornada começa com uma avaliação individual, em que o fisioterapeuta entende sua dor, seu histórico e seus movimentos antes de indicar o tratamento mais adequado.",
  },
  {
    question: "Vocês tratam dor na coluna?",
    answer:
      "Sim. Tratamos dor lombar, cervical e outras disfunções da coluna, sempre com avaliação prévia para identificar a origem do problema.",
  },
  {
    question: "Vocês tratam dor no joelho?",
    answer:
      "Sim. Cuidamos de dores relacionadas à artrose, lesões e pós-operatório do joelho, com protocolos personalizados para cada caso.",
  },
  {
    question: "O atendimento é em Recife?",
    answer:
      "Sim. A FIND fica em Santo Amaro, Recife – PE, no Empresarial Camilo Brito.",
  },
  {
    question: "Em quanto tempo posso melhorar?",
    answer:
      "O tempo de resposta varia de pessoa para pessoa, de acordo com o tipo de dor e o tempo de evolução. Na avaliação, a equipe explica o que esperar para o seu caso específico.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "É simples: basta chamar a equipe da FIND no WhatsApp e agendar sua avaliação no horário que for melhor para você.",
  },
];

const Faq = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-5xl font-display text-foreground">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6 shadow-card">
            {faqs.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`} className={i === faqs.length - 1 ? "border-b-0" : ""}>
                <AccordionTrigger className="font-body text-left text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://wa.me/558194251583"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow inline-flex items-center justify-center px-8 py-4 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-base shadow-gold hover:scale-[1.02] transition-all duration-200"
          >
            Tirar minhas dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
