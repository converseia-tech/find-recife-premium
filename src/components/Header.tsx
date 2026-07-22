import { useState, useEffect } from "react";
import logo from "@/assets/logo_colorida.png";
import logoWhite from "@/assets/logo_branca.png";
import { Menu, Moon, Sun, X, Instagram, Facebook, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Nossos Clientes", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isBlackTheme, setIsBlackTheme] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("find-theme");
    const shouldUseBlack = savedTheme === "black";

    setIsBlackTheme(shouldUseBlack);
    document.documentElement.classList.toggle("theme-black", shouldUseBlack);
  }, []);

  const toggleTheme = () => {
    const nextIsBlack = !isBlackTheme;
    setIsBlackTheme(nextIsBlack);
    document.documentElement.classList.toggle("theme-black", nextIsBlack);
    window.localStorage.setItem("find-theme", nextIsBlack ? "black" : "default");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 shadow-card"
          : "bg-transparent"
      }`}
    >
      {/* Top bar – social + slogan */}
      <div className={`hidden lg:block border-b transition-all duration-300 ${scrolled ? "border-border/30 bg-background/60" : "border-white/10 bg-black/20"}`}>
        <div className="container mx-auto px-4 lg:px-8 py-2 flex items-center justify-between">
          <p className="font-mono text-[11px] text-muted-foreground tracking-wide">
            Fisioterapia Regenerativa en Recife – PE.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/find.recife/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram FIND Recife"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://www.facebook.com/p/Consultório-FIND-61555041654471/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook FIND Recife"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Facebook size={14} />
            </a>
            <span className="w-px h-3 bg-border/50" />
            <a
              href="https://wa.me/558194251583"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              (81) 9425-1583
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#inicio">
          <img src={isBlackTheme ? logoWhite : logo} alt="FIND Recife" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[12px] border border-border text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors duration-200"
            aria-label={isBlackTheme ? "Ativar tema padrão" : "Ativar tema black"}
          >
            {isBlackTheme ? <Sun size={16} /> : <Moon size={16} />}
            <span className="font-body text-xs font-semibold uppercase tracking-wide">
              {isBlackTheme ? "" : ""}
            </span>
          </button>
          <a
            href="https://wa.me/558194251583"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow inline-flex items-center gap-2 px-6 py-3 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
          >
            Agendar avaliação
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center h-10 w-10 rounded-[12px] border border-border text-foreground"
            aria-label={isBlackTheme ? "Ativar tema padrão" : "Ativar tema black"}
          >
            {isBlackTheme ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="https://wa.me/558194251583"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar avaliação pelo WhatsApp"
            className="animate-pulse-glow inline-flex items-center justify-center h-10 w-10 rounded-[12px] bg-primary text-primary-foreground shadow-gold"
          >
            <MessageCircle size={18} />
          </a>

          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-base text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/558194251583"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-glow mt-2 inline-flex items-center justify-center px-6 py-3 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-sm shadow-gold"
            >
              Agendar avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
