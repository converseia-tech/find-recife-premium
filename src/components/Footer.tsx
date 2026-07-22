import { Instagram, Facebook } from "lucide-react";
import logoBranca from "@/assets/logo_branca.png";

const Footer = () => {
  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Sobre", href: "#sobre" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer id="contato" className="bg-dark-surface pt-16 pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 pb-12 border-b border-dark-surface-foreground/10">
          {/* Logo + about */}
          <div className="space-y-4 lg:col-span-1">
            <img src={logoBranca} alt="FIND Recife" className="h-16 w-auto" />
            <p className="font-body text-sm text-dark-surface-foreground/50 max-w-xs leading-relaxed">
              Fisioterapia regenerativa com precisão, tecnologia e cuidado individualizado em Recife – PE.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/find.recife/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram FIND Recife"
                className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] border border-dark-surface-foreground/10 text-dark-surface-foreground/40 hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/p/Consultório-FIND-61555041654471/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook FIND Recife"
                className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] border border-dark-surface-foreground/10 text-dark-surface-foreground/40 hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/558194251583"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp FIND Recife"
                className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] border border-dark-surface-foreground/10 text-dark-surface-foreground/40 hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                {/* WhatsApp SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
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

          {/* Especialidades */}
          <div>
            <h4 className="font-body font-semibold text-sm text-dark-surface-foreground mb-4">Especialidades</h4>
            <ul className="flex flex-col gap-3">
              {[
                "Fisioterapia Regenerativa",
                "Termografia Clínica",
                "Tratamento de Joelho",
                "Fisioterapia para Coluna",
                "Dor Músculo-Esquelética",
                "Procedimentos com iPRF",
              ].map((item) => (
                <li key={item} className="font-body text-sm text-dark-surface-foreground/50">
                  {item}
                </li>
              ))}
            </ul>
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

        <div className="pt-8 flex flex-col items-center gap-8">
          <a
            href="https://wa.me/558194251583"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow inline-flex items-center justify-center px-8 py-4 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-base shadow-gold hover:scale-[1.02] transition-all duration-200"
          >
            Chamar a FIND no WhatsApp
          </a>

          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-dark-surface-foreground/30">
              © 2026 FIND Recife. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/find.recife/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-dark-surface-foreground/30 hover:text-primary transition-colors"
              >
                @find.recife
              </a>
              <span className="text-dark-surface-foreground/20">·</span>
              <a
                href="/politica-de-privacidade"
                className="font-mono text-xs text-dark-surface-foreground/30 hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
