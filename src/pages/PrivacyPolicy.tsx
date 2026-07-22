import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";

const sections = [
  {
    title: "1. Quem somos",
    content:
      "Este site pertence à FIND Recife, clínica de fisioterapia regenerativa localizada em Santo Amaro, Recife – PE. Esta página explica, de forma geral, como tratamos informações de quem visita nosso site.",
  },
  {
    title: "2. Quais dados coletamos",
    content:
      "Este site não possui formulários próprios de cadastro. O contato com a nossa equipe acontece diretamente pelo WhatsApp, cujo tratamento de dados segue a política de privacidade do próprio WhatsApp/Meta. Durante a navegação, utilizamos ferramentas de análise (como Google Tag Manager) que podem coletar dados de navegação de forma anônima ou agregada, como páginas visitadas e origem do acesso, para entender melhor como o site é utilizado.",
  },
  {
    title: "3. Finalidade do uso dos dados",
    content:
      "As informações de navegação coletadas são usadas exclusivamente para entender o desempenho do site e melhorar a experiência de quem o visita. Não vendemos nem compartilhamos dados pessoais com terceiros para fins comerciais.",
  },
  {
    title: "4. Cookies",
    content:
      "Nosso site pode utilizar cookies e tecnologias semelhantes para viabilizar o funcionamento de ferramentas de análise de tráfego. Você pode gerenciar ou bloquear cookies diretamente nas configurações do seu navegador.",
  },
  {
    title: "5. Seus direitos",
    content:
      "Você pode, a qualquer momento, solicitar esclarecimentos sobre o tratamento de informações relacionadas ao seu atendimento entrando em contato diretamente com a nossa equipe pelo WhatsApp.",
  },
  {
    title: "6. Atualizações desta política",
    content:
      "Esta política pode ser atualizada periodicamente para refletir mudanças nas nossas práticas ou por exigências legais. Recomendamos revisitar esta página de tempos em tempos.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">FIND Recife</p>
          <h1 className="text-3xl lg:text-5xl font-display text-foreground mb-8">
            Política de Privacidade
          </h1>
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h2 className="font-display text-xl text-foreground">{section.title}</h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default PrivacyPolicy;
