import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import door1 from "@/assets/gallery/door-1.jpeg";
import door2 from "@/assets/gallery/door-2.jpeg";
import door3 from "@/assets/gallery/door-3.jpeg";
import door4 from "@/assets/gallery/door-4.jpeg";
import door5 from "@/assets/gallery/door-5.jpeg";
import door6 from "@/assets/gallery/door-6.jpeg";
import door7 from "@/assets/gallery/door-7.jpeg";
import door8 from "@/assets/gallery/door-8.jpeg";
import door9 from "@/assets/gallery/door-9.jpeg";
import door10 from "@/assets/gallery/door-10.jpeg";
import chimenea from "@/assets/gallery/chimenea.png";
import chimenea2 from "@/assets/gallery/chimenea-2.jpeg";
import chimenea3 from "@/assets/gallery/chimenea-3.jpeg";
import chimenea4 from "@/assets/gallery/chimenea-4.jpeg";
import chimeneaProceso1 from "@/assets/gallery/chimenea-proceso-1.jpeg";
import chimeneaProceso2 from "@/assets/gallery/chimenea-proceso-2.jpeg";
import persianas from "@/assets/gallery/persianas.jpg";
import cortina1 from "@/assets/gallery/cortina-1.jpeg";
import cortina2 from "@/assets/gallery/cortina-2.jpeg";
import fabrica1 from "@/assets/gallery/fabrica-1.jpeg";

const galleryItems = [
  { src: door1, label: "Puerta de seguridad — Acabado madera con vidrio", category: "Puertas" },
  { src: door2, label: "Puerta doble hoja — Diseño contemporáneo", category: "Puertas" },
  { src: door3, label: "Puerta blindada — Acabado roble", category: "Puertas" },
  { src: door4, label: "Puerta de seguridad — Estilo rústico", category: "Puertas" },
  { src: door5, label: "Puerta blindada — Cerradura inteligente", category: "Puertas" },
  { src: door6, label: "Puerta de seguridad — Acabado natural", category: "Puertas" },
  { src: door7, label: "Puerta doble hoja — Diseño clásico", category: "Puertas" },
  { src: door8, label: "Puerta de seguridad — Franjas cromadas", category: "Puertas" },
  { src: door9, label: "Puerta blindada — Acabado madera clara", category: "Puertas" },
  { src: door10, label: "Puerta de seguridad — Acabado cerezo", category: "Puertas" },
  { src: persianas, label: "Panel japonés — Sala de estar", category: "Persianas" },
  { src: cortina1, label: "Cortina velo — Habitación principal", category: "Persianas" },
  { src: cortina2, label: "Cortina vertical — Sala con piso de madera", category: "Persianas" },
  { src: chimenea, label: "Chimenea en mármol — Instalación profesional", category: "Chimeneas" },
  { src: chimenea2, label: "Chimenea de etanol — Diseño moderno", category: "Chimeneas" },
  { src: chimenea3, label: "Chimenea empotrada — Acabado en piedra", category: "Chimeneas" },
  { src: chimenea4, label: "Chimenea de pared — Mármol negro", category: "Chimeneas" },
  { src: chimeneaProceso1, label: "Estructura de chimenea — En proceso", category: "Chimeneas" },
  { src: chimeneaProceso2, label: "Instalación de chimenea — Obra en sitio", category: "Chimeneas" },
  { src: fabrica1, label: "Fabricación directa — Soldadura de puertas", category: "Fábrica" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = ["Todos", "Puertas", "Persianas", "Chimeneas", "Fábrica"];
  const filtered = filter === "Todos" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    const newIdx = lightbox + dir;
    if (newIdx >= 0 && newIdx < filtered.length) setLightbox(newIdx);
  };

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-accent">
            Galería
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Nuestras{" "}
            <span className="text-gradient-primary">instalaciones</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Proyectos reales realizados en hogares y negocios de toda Colombia.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all ${
                filter === c
                  ? "bg-gradient-primary text-primary-foreground shadow-elevated"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-heading font-bold text-primary-foreground bg-primary/80 backdrop-blur-sm px-2 py-1 rounded">
                  {item.category}
                </span>
                <p className="text-sm font-heading font-semibold text-primary-foreground mt-1.5 line-clamp-2">
                  {item.label}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <X size={28} />
          </button>

          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft size={40} />
            </button>
          )}

          {lightbox < filtered.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <ChevronRight size={40} />
            </button>
          )}

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].label}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
            <p className="text-primary-foreground font-heading font-semibold mt-4 text-center">
              {filtered[lightbox].label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
