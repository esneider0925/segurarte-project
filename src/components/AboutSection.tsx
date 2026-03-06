import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Más de 5 años de experiencia en el sector",
  "Equipos de marcas líderes a nivel mundial",
  "Instalación profesional y garantizada",
  "Soporte técnico post-venta",
  "Diseño personalizado para cada espacio",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-navy text-navy-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-heading font-bold tracking-widest uppercase text-accent">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black mt-3 mb-6 text-primary-foreground">
              Seguridad con{" "}
              <span className="text-gradient-primary">arte y diseño</span>
            </h2>
            <p className="text-navy-foreground/70 text-lg leading-relaxed mb-8">
              En <strong className="text-primary-foreground">SegurArte</strong>{" "}
              creemos que la seguridad no tiene que ser invasiva ni antiestética.
              Diseñamos e instalamos sistemas que protegen tu patrimonio sin
              comprometer la estética de tu espacio.
            </p>

            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  <span className="text-navy-foreground/80">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "500+", label: "Proyectos realizados" },
              { num: "24/7", label: "Monitoreo disponible" },
              { num: "100%", label: "Clientes satisfechos" },
              { num: "5+", label: "Años de experiencia" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-navy-foreground/5 border border-navy-foreground/10 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-black text-gradient-primary mb-2">
                  {s.num}
                </div>
                <div className="text-sm text-navy-foreground/60 font-heading font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
