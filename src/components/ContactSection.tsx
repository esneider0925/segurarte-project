import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-accent">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            ¿Listo para{" "}
            <span className="text-gradient-primary">proteger tu espacio</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Contáctanos hoy para una asesoría sin compromiso. Te ayudamos a
            encontrar la solución perfecta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                label: "Teléfono",
                value: "Contáctanos por WhatsApp",
                href: "https://wa.me/",
              },
              {
                icon: Mail,
                label: "Correo electrónico",
                value: "info@segurarte.com",
                href: "mailto:info@segurarte.com",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@segurarte_",
                href: "https://www.instagram.com/segurarte_",
              },
              {
                icon: MapPin,
                label: "Ubicación",
                value: "Servicio a toda la región",
                href: "#",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-card rounded-2xl p-6 shadow-card border border-border/60 hover:shadow-elevated transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <c.icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-heading font-semibold">
                    {c.label}
                  </div>
                  <div className="text-foreground font-heading font-bold">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-gradient-hero rounded-2xl p-10 flex flex-col justify-center text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-black text-primary-foreground mb-4">
              Solicita tu cotización gratuita
            </h3>
            <p className="text-navy-foreground/70 mb-8 max-w-sm mx-auto">
              Cuéntanos qué necesitas y te preparamos una propuesta
              personalizada sin ningún compromiso.
            </p>
            <a
              href="https://www.instagram.com/segurarte_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-heading font-bold hover:opacity-90 transition-opacity shadow-elevated mx-auto"
            >
              <Instagram size={20} />
              Escríbenos por Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
