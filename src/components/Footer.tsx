import logoBranca from "@/assets/logo_branca.png";

const Footer = () => {
  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer id="contato" className="bg-dark-surface pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 pb-12 border-b border-dark-surface-foreground/10">
          {/* Logo + about */}
          <div className="space-y-4">
            <img src={logoBranca} alt="FIND Recife" className="h-16 w-auto" />
            <p className="font-body text-sm text-dark-surface-foreground/50 max-w-xs leading-relaxed">
              Fisioterapia regenerativa com precisão, tecnologia e cuidado individualizado.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-semibold text-sm text-dark-surface-foreground mb-4">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-dark-surface-foreground/50 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact + Map */}
          <div className="space-y-4">
            <h4 className="font-body font-semibold text-sm text-dark-surface-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <p className="font-mono text-xs text-dark-surface-foreground/50 tabular-nums">
                Empresarial Camilo Brito
              </p>
              <p className="font-mono text-xs text-dark-surface-foreground/50 tabular-nums">
                R. Arnóbio Marques, 253 - Sala 1108
              </p>
              <p className="font-mono text-xs text-dark-surface-foreground/50 tabular-nums">
                Santo Amaro, Recife - PE, 50100-130
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Empresarial+Camilo+Brito+R.+Arnóbio+Marques+253+Santo+Amaro+Recife+PE"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 rounded-[12px] overflow-hidden border border-dark-surface-foreground/10 hover:border-primary/30 transition-colors duration-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3!2d-34.88!3d-8.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDMnMzYuMCJTIDM0wrA1Mic0OC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="160"
                style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização FIND Recife"
              />
              <div className="p-3 bg-dark-surface-foreground/5">
                <p className="font-mono text-xs text-primary">Ver no Google Maps →</p>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-dark-surface-foreground/30">
            © 2024 FIND Recife. Todos os direitos reservados.
          </p>
          <a
            href="https://wa.me/558194251583"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-primary hover:text-accent transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
