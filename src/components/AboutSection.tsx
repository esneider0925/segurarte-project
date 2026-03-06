import { CheckCircle2, Factory } from "lucide-react";

const highlights = [
  "Fabricantes directos — sin intermediarios",
  "Precios más competitivos del mercado",
  "Diseños personalizados para cada proyecto",
  "Instalación profesional en toda Colombia",
  "Materiales de primera calidad garantizados",
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
              De la fábrica{" "}
              <span className="text-gradient-primary">a tu puerta</span>
            </h2>
            <p className="text-navy-foreground/70 text-lg leading-relaxed mb-8">
              En <strong className="text-primary-foreground">SegurArte</strong>{" "}
              somos una fábrica especializada en puertas de seguridad con
              diseño. Al ser fabricantes directos, eliminamos intermediarios para
              ofrecerte la mejor calidad al precio más justo. Además,
              complementamos tu proyecto con persianas y chimeneas en mármol con
              etanol.
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

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "500+", label: "Puertas instaladas" },
              { num: "100%", label: "Fabricación propia" },
              { num: "🇨🇴", label: "Cobertura nacional" },
              { num: "#1", label: "Precio de fábrica" },
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
