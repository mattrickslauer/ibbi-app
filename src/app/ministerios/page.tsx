"use client";

import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

export default function Ministerios() {
  return (
    <main>
      <PageHero
        title="Ministerios"
        subtitle="Sirviendo a nuestra comunidad con amor y propósito"
      />

      {/* Evangelismo */}
      <section className="bg-cream-light py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <RevealSection animation="animate-slide-right">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/evangelism.jpg"
                  alt="Evangelismo semanal"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </RevealSection>

            <RevealSection animation="animate-slide-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5">
                <svg className="h-7 w-7 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>

              <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-forest sm:text-4xl">
                Evangelismo Semanal
              </h2>
              <div className="section-divider mt-6" />

              <p className="mt-8 text-lg leading-relaxed text-stone">
                ¿Por qué es importante el evangelismo en la iglesia? La
                evangelización es llevar las buenas nuevas de Jesucristo a
                quienes nos rodean.
              </p>

              <p className="mt-4 text-base leading-relaxed text-stone-light">
                Jesús mismo nos mandó a evangelizar. La Iglesia existe para dar
                testimonio del Evangelio. Las personas que nos rodean nunca han
                escuchado que Dios los ama y desea una vida abundante.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Additional ministries overview */}
      <section className="bg-forest py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <RevealSection className="mb-20 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">
              Nuestros Ministerios
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-cream-light sm:text-5xl">
              Cómo Servimos
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </RevealSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Predicación Bíblica",
                desc: "Enseñanza fiel y práctica de la Palabra de Dios cada domingo.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
              {
                title: "Evangelismo",
                desc: "Salidas semanales para compartir las buenas nuevas de Cristo.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
              {
                title: "Estudio Bíblico",
                desc: "Estudios profundos de las Escrituras los miércoles por la noche.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                ),
              },
              {
                title: "Adoración Musical",
                desc: "Himnos vibrantes y conmovedores acompañados de piano.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.34A1.154 1.154 0 0017.58 1.2l-3.467.99A2.25 2.25 0 0012.48 4.35V18" />
                  </svg>
                ),
              },
              {
                title: "Educación Cristiana",
                desc: "Instrucción bíblica para niños de 4 a 12 años.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
              {
                title: "Grupos de Mujeres",
                desc: "Compañerismo y estudio bíblico para mujeres de la comunidad.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
            ].map((ministry, i) => (
              <RevealSection key={i} className={`delay-${Math.min((i + 1) * 100, 800)}`}>
                <div className="card-lift group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    {ministry.icon}
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-medium text-cream-light">
                    {ministry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sage-light/70">
                    {ministry.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
