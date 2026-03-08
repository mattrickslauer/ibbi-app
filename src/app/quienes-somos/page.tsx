"use client";

import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

const beliefs = [
  {
    title: "La Biblia",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    text: "Afirmamos las Escrituras como la regla absoluta, única y autorizada como fuente para la fe y la práctica. La Palabra de Dios ha sido preservada para nosotros hoy.",
    verse: "Salmos 12:6-7",
  },
  {
    title: "Jesucristo",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    text: "Creemos en la deidad de Cristo, su nacimiento virginal, su expiación vicaria, su resurrección corporal y su segunda venida.",
    verse: "Juan 1:1; Isaías 7:14; 1 Juan 2:1-2",
  },
  {
    title: "Salvación",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    text: "La salvación es por gracia mediante la fe en la obra completa de Cristo, no por obras. Enfatizamos la seguridad eterna del alma del creyente.",
    verse: "Efesios 2:8-9; Tito 3:5",
  },
  {
    title: "La Iglesia",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    text: "Reconocemos dos usos bíblicos: el cuerpo espiritual de Cristo y las asambleas locales autónomas. Dos ordenanzas (bautismo en agua y la Cena del Señor) y dos oficios (pastor y diácono).",
    verse: "Hechos 2:41-47",
  },
  {
    title: "Doctrina",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    text: "Doctrina bautista con adoración tradicional. Creemos en los dones soberanos del Espíritu Santo para la edificación de la iglesia. Cristianismo bíblico práctico con dispensacionalismo moderado.",
    verse: "2 Timoteo 3:16-17",
  },
];

export default function QuienesSomos() {
  return (
    <main>
      <PageHero
        title="Quiénes Somos"
        subtitle="Y finalmente sed todos de un consentimiento, de una afección, amándoos hermanablemente, misericordiosos, amigables..."
      />

      {/* Mission statement */}
      <section className="bg-cream-light py-28 sm:py-36">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <RevealSection className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-muted">
              Nuestra Misión
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-forest sm:text-4xl">
              Fe, Esperanza y Amor
            </h2>
            <div className="section-divider mx-auto mt-6" />
            <p className="mt-8 text-lg leading-relaxed text-stone">
              La Iglesia Bíblica Bautista Internacional es una comunidad de creyentes
              comprometidos con la enseñanza fiel de la Biblia, el crecimiento espiritual
              y el servicio a nuestra comunidad en Punta Arenas, Patagonia. Creemos que
              cada persona puede encontrar propósito y transformación a través del amor de Cristo.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Beliefs */}
      <section id="creencias" className="bg-forest py-28 sm:py-36 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <RevealSection className="mb-20 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">
              Lo Que Creemos
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-cream-light sm:text-5xl">
              Nuestras Creencias
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </RevealSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief, i) => (
              <RevealSection key={i} className={`delay-${Math.min((i + 1) * 100, 800)}`}>
                <div className="card-lift group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    {belief.icon}
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-medium text-cream-light">
                    {belief.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-sage-light/70">
                    {belief.text}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold/60">
                    {belief.verse}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="bg-cream-light py-28 sm:py-36">
        <RevealSection animation="animate-scale-in" className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-divider mx-auto mb-10" />
          <blockquote className="font-[family-name:var(--font-display)] text-2xl leading-relaxed tracking-tight text-forest italic sm:text-3xl text-balance">
            &ldquo;Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia.&rdquo;
          </blockquote>
          <cite className="mt-8 block text-sm font-semibold not-italic uppercase tracking-[0.2em] text-forest-muted">
            2 Timoteo 3:16
          </cite>
          <div className="section-divider mx-auto mt-10" />
        </RevealSection>
      </section>
    </main>
  );
}
