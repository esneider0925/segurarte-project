import { ImageIcon } from "lucide-react";

const GallerySection = () => {
  // Placeholder grid — will be replaced with real installation photos
  const placeholders = Array.from({ length: 6 });

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-accent">
            Galería
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Nuestras{" "}
            <span className="text-gradient-primary">instalaciones</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conoce algunos de nuestros proyectos realizados en todo el país.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl bg-muted border border-border/60 flex flex-col items-center justify-center gap-3 hover:shadow-card transition-shadow"
            >
              <ImageIcon size={36} className="text-muted-foreground/40" />
              <span className="text-xs text-muted-foreground/50 font-heading font-semibold">
                Foto próximamente
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Pronto agregaremos fotos reales de nuestras instalaciones.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
