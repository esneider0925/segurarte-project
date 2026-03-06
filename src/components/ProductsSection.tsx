import { DoorOpen, Blinds, Flame } from "lucide-react";

const products = [
  {
    icon: DoorOpen,
    title: "Puertas de Seguridad",
    desc: "Fabricamos puertas blindadas y de seguridad para viviendas, apartamentos, negocios y locales comerciales. Diseños personalizados con los mejores acabados.",
    highlight: true,
  },
  {
    icon: Blinds,
    title: "Persianas",
    desc: "Persianas de alta calidad en diversos materiales y estilos. Funcionalidad y estética para complementar cualquier espacio interior o exterior.",
    highlight: false,
  },
  {
    icon: Flame,
    title: "Chimeneas en Mármol + Etanol",
    desc: "Chimeneas decorativas con acabados en mármol y funcionamiento a etanol. Elegancia y calidez sin necesidad de instalaciones de gas.",
    highlight: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-accent">
            Nuestros Productos
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Calidad de{" "}
            <span className="text-gradient-primary">fábrica directa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Al ser fabricantes directos ofrecemos los precios más competitivos
            del mercado sin sacrificar calidad ni diseño.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className={`group rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 border ${
                p.highlight
                  ? "bg-navy text-navy-foreground border-navy-foreground/10"
                  : "bg-card text-foreground border-border/60"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  p.highlight
                    ? "bg-gradient-primary"
                    : "bg-gradient-primary"
                }`}
              >
                <p.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {p.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  p.highlight ? "text-navy-foreground/70" : "text-muted-foreground"
                }`}
              >
                {p.desc}
              </p>
              {p.highlight && (
                <span className="inline-block mt-4 text-xs font-heading font-bold tracking-widest uppercase text-accent">
                  ★ Producto Principal
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-secondary/60 rounded-2xl p-8 md:p-10 text-center border border-border/60">
          <p className="text-lg font-heading font-bold text-foreground mb-1">
            🇨🇴 Instalación en toda Colombia
          </p>
          <p className="text-muted-foreground">
            Llevamos e instalamos nuestros productos en cualquier ciudad del
            país con servicio profesional garantizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
