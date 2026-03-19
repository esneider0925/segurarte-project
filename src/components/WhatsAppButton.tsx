import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573177540685?text=Hola%2C%20me%20interesa%20una%20cotización";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white pl-5 pr-6 py-3.5 rounded-full shadow-elevated hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
    >
      <MessageCircle size={24} className="shrink-0" />
      <span className="text-sm font-heading font-bold hidden sm:inline">
        Cotiza por WhatsApp
      </span>
    </a>
  );
};

export { WHATSAPP_URL };
export default WhatsAppButton;
