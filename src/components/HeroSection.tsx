import { ArrowRight, Factory } from "lucide-react";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { WHATSAPP_URL } from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-hero opacity-75" />

      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-8">
            <Factory size={16} className="text-accent" />
            <span className="text-sm font-heading font-semibold text-accent">
              Más de 25 años protegiendo hogares en Colombia
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.05] text-primary-foreground mb-6">
            Tranquilidad y
            <span className="block text-gradient-primary">protección</span>
          </h1>

          <p className="text-lg md:text-xl text-navy-foreground/70 leading-relaxed mb-10 max-w-lg">
            Una puerta de seguridad no es un lujo, es protección para tu
            patrimonio. Fabricantes directos con los precios más competitivos
            del mercado. Instalación en toda Colombia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl text-base font-heading font-bold hover:bg-[#20bd5a] transition-colors shadow-elevated"
            >
              <MessageCircle size={20} />
              Cotizar por WhatsApp
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 border border-navy-foreground/20 text-navy-foreground px-8 py-4 rounded-xl text-base font-heading font-semibold hover:bg-navy-foreground/5 transition-colors"
            >
              Ver Productos
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
