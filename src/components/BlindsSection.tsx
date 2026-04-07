import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { WHATSAPP_URL } from "./WhatsAppButton";
import { MessageCircle } from "lucide-react";

import persianas from "@/assets/gallery/persianas.jpg";
import cortina1 from "@/assets/gallery/cortina-1.jpeg";
import cortina2 from "@/assets/gallery/cortina-2.jpeg";

const blindsItems = [
  { src: persianas, label: "Panel japonés — Elegancia para tu sala de estar" },
  { src: cortina1, label: "Cortina velo — Suavidad y privacidad" },
  { src: cortina2, label: "Cortina vertical — Estilo y funcionalidad" },
];

const BlindsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const totalDots = emblaApi?.scrollSnapList().length ?? 0;

  return (
    <section id="persianas" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-accent">
            Ambientes
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Persianas &{" "}
            <span className="text-gradient-primary">Cortinas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Complementa la seguridad de tu hogar con persianas y cortinas de
            alta calidad. Funcionalidad, estética y control de luz para cada
            espacio.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group max-w-5xl mx-auto">
          <button
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-elevated border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-elevated border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronRight size={22} />
          </button>

          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex -ml-4">
              {blindsItems.map((item, i) => (
                <div key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 pl-4">
                  <div className="group/card relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-base font-heading font-semibold text-primary-foreground">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {totalDots > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Proveedores aliados */}
        <div className="mt-16 bg-secondary/60 rounded-2xl p-8 md:p-10 text-center border border-border/60">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
            Proveedores aliados
          </h3>
          <p className="text-muted-foreground mb-6">
            Trabajamos con las mejores marcas del mercado en persianas y
            cortinas para garantizar calidad y durabilidad.
          </p>
          <p className="text-sm text-muted-foreground italic mb-6">
            Logos de marcas aliadas próximamente...
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl text-sm font-heading font-bold hover:bg-[#20bd5a] transition-colors shadow-elevated"
          >
            <MessageCircle size={18} />
            Cotizar persianas y cortinas
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlindsSection;
