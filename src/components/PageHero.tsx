"use client";

export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-forest pt-20">
      {/* Subtle orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] left-[15%] h-64 w-64 rounded-full bg-sage/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] h-48 w-48 rounded-full bg-gold/5 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="animate-fade-up font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-cream-light sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-sage-light/60">
            {subtitle}
          </p>
        )}
        <div className="section-divider mx-auto mt-8 animate-draw-line delay-300" />
      </div>
    </section>
  );
}
