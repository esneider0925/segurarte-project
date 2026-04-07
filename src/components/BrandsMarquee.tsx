interface Brand {
  src: string;
  name: string;
}

interface BrandsMarqueeProps {
  brands: Brand[];
}

const BrandsMarquee = ({ brands }: BrandsMarqueeProps) => {
  const doubled = [...brands, ...brands];

  return (
    <div className="overflow-hidden">
      <div className="flex items-center gap-10 md:gap-16 animate-scroll-left w-max">
        {doubled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="bg-background rounded-xl p-6 shadow-card border border-border/60 flex items-center justify-center hover:shadow-elevated transition-shadow duration-300 shrink-0"
            style={{ minWidth: 150, minHeight: 100 }}
          >
            <img
              src={brand.src}
              alt={brand.name}
              className="max-h-14 md:max-h-18 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsMarquee;
