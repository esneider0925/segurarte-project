import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import lock1 from "@/assets/locks/lock-1.png";
import lock2 from "@/assets/locks/lock-2.png";
import lock3 from "@/assets/locks/lock-3.png";
import lock4 from "@/assets/locks/lock-4.png";
import lock5 from "@/assets/locks/lock-5.png";
import lock6 from "@/assets/locks/lock-6.png";
import lock7 from "@/assets/locks/lock-7.png";

import iseoLogo from "@/assets/brands/iseo.png";
import securemmeLogo from "@/assets/brands/securemme.png";
import fourKLogo from "@/assets/brands/4k.png";

const lockItems = [
  { src: lock1, label: "Cerradura multipunto — Acabado cromado" },
  { src: lock2, label: "Cerradura 4K — Sistema multipunto italiano" },
  { src: lock3, label: "Cerradura Securemme — Alta seguridad" },
  { src: lock4, label: "Cerradura CISA — Cerrojo de embutir" },
  { src: lock5, label: "Cerradura KL Security — Sistema de pasadores" },
  { src: lock6, label: "Cerradura Kale Kilit — Certificación europea" },
  { src: lock7, label: "Cerradura de alta seguridad — Pasadores reforzados" },
];

const brands = [
  { src: iseoLogo, name: "ISEO" },
  { src: securemmeLogo, name: "Securemme" },
  { src: fourKLogo, name: "4K Italy" },
];

const LocksSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const totalDots = emblaApi?.scrollSnapList().length ?? 0;

  return (
    <section id="cerraduras" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-accent">
            Seguridad
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Cerraduras de{" "}
            <span className="text-gradient-primary">alta seguridad</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Equipamos cada puerta con cerraduras de las mejores marcas
            internacionales, garantizando la máxima protección para tu hogar.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group max-w-5xl mx-auto">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-elevated border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-elevated border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight size={22} />
          </button>

          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex -ml-4">
              {lockItems.map((item, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 pl-4"
                >
                  <div className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border/60">
                    <div className="aspect-square p-4 flex items-center justify-center bg-muted/30">
                      <img
                        src={item.src}
                        alt={item.label}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-heading font-semibold text-foreground line-clamp-2">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        {totalDots > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Brands section */}
        <div className="mt-20 text-center">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
            Trabajamos con marcas líderes en seguridad
          </h3>
          <p className="text-muted-foreground mb-10">
            Las mejores cerraduras del mercado internacional para proteger tu hogar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-background rounded-xl p-6 shadow-card border border-border/60 flex items-center justify-center hover:shadow-elevated transition-shadow duration-300"
                style={{ minWidth: 140, minHeight: 100 }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="max-h-16 md:max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocksSection;
