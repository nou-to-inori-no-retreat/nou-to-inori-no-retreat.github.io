type ProductCardProps = {
  title: string;
  description: string;
  tags: string[];
  tone: "water" | "leaf" | "gold" | "navy" | "mist";
};

const toneStyles = {
  water: "from-sagittarius-water/70 via-white to-sagittarius-mist",
  leaf: "from-sagittarius-leaf/18 via-white to-sagittarius-mist",
  gold: "from-sagittarius-gold/24 via-white to-sagittarius-mist",
  navy: "from-sagittarius-navy/18 via-white to-sagittarius-mist",
  mist: "from-sagittarius-mist via-white to-sagittarius-water/26",
};

export function ProductCard({ title, description, tags, tone }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.35rem] border border-sagittarius-water/35 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sagittarius-gold/55">
      <div className={`relative h-44 bg-gradient-to-br ${toneStyles[tone]}`}>
        <div className="absolute inset-0 ripple-field opacity-60" />
        <div className="absolute bottom-6 left-7 h-16 w-28 rounded-full border border-sagittarius-gold/45" />
        <div className="absolute bottom-9 left-12 h-10 w-20 rounded-[50%] bg-white/60 shadow-line" />
        <div className="absolute bottom-12 left-20 h-14 w-8 rotate-45 rounded-[100%_0_100%_0] bg-sagittarius-leaf/75 transition duration-300 group-hover:rotate-[52deg]" />
        <div className="absolute right-7 top-7 h-12 w-12 rounded-full border border-sagittarius-gold/45" />
        <div className="absolute right-12 top-12 h-1 w-20 rotate-[-32deg] bg-sagittarius-gold/70" />
      </div>
      <div className="p-6">
        <h3 className="serif-heading text-2xl font-semibold text-sagittarius-navy">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-sagittarius-ink/72">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              className="rounded-full border border-sagittarius-water/60 bg-sagittarius-mist px-3 py-1 text-[0.72rem] font-medium tracking-[0.08em] text-sagittarius-navy"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
