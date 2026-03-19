import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoSA from "@/assets/logoSA.png";
import { WHATSAPP_URL } from "./WhatsAppButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Galería", href: "#galeria" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-navy-foreground/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio">
          <img src={logoSA} alt="SegurArte logo" className="h-10 md:h-12" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-heading font-semibold tracking-wide text-navy-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-sm font-heading font-bold tracking-wide hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle size={16} />
              Cotizar
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-navy-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-navy-foreground/10 py-4">
          <ul className="container flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-heading font-semibold text-navy-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-sm font-heading font-bold"
              >
                <MessageCircle size={16} />
                Cotizar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
