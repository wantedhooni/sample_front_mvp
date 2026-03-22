type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.32em] text-[#8c6c54]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl leading-tight text-[#171717] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#5e5248] md:text-lg">
        {description}
      </p>
    </div>
  );
}
