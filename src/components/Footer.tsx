import logoSA from "@/assets/logoSA.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-navy-foreground/10 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logoSA} alt="SegurArte" className="h-10" />
        <p className="text-navy-foreground/50 text-sm font-heading">
          © {new Date().getFullYear()} SegurArte — Seguridad & Diseño. Todos
          los derechos reservados.
        </p>
        <a
          href="https://www.instagram.com/segurarte_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-foreground/50 hover:text-accent transition-colors"
        >
          <Instagram size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
