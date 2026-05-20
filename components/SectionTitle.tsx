type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "left",
  light = false,
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.32em] ${
            light ? "text-sagittarius-water" : "text-sagittarius-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`serif-heading text-3xl font-semibold leading-[1.45] md:text-5xl ${
          light ? "text-white" : "text-sagittarius-navy"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-6 text-base leading-8 md:text-lg ${
            light ? "text-white/78" : "text-sagittarius-ink/76"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
