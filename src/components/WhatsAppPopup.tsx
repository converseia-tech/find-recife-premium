import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "558194251583";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-card rounded-2xl shadow-card border border-border p-5 w-72 animate-fade-up">
          <div className="flex items-center justify-between mb-3">
            <p className="font-body font-semibold text-sm text-foreground">FIND Recife</p>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-4">
            Olá! Como podemos ajudar? Fale conosco pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-[12px] bg-[hsl(142,70%,40%)] text-white font-body font-semibold text-sm hover:scale-[1.02] transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Iniciar conversa
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-white shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppPopup;
