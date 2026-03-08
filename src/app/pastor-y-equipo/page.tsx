"use client";

import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

export default function PastorYEquipo() {
  return (
    <main>
      <PageHero
        title="Pastor y Esposa"
        subtitle="Sirviendo con amor y fidelidad en Punta Arenas"
      />

      {/* Wedding photo + intro */}
      <section className="bg-cream-light py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <RevealSection animation="animate-slide-right">
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-24 w-24 rounded-tl-3xl border-t-2 border-l-2 border-gold/30" />
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-br-3xl border-r-2 border-b-2 border-gold/30" />
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/wedding.jpg"
                    alt="Derek y Alicia Hansen"
                    width={600}
                    height={600}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </RevealSection>

            <RevealSection animation="animate-slide-left">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-muted">
                Nuestro Pastor
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-forest sm:text-4xl">
                Derek &amp; Alicia Hansen
              </h2>
              <div className="section-divider mt-6" />
              <p className="mt-8 text-lg leading-relaxed text-stone">
                Misioneros afiliados a Word for the World Baptist Missions
                (con sede en Rossville, Georgia), Derek y Alicia han dedicado
                más de 24 años al ministerio bíblico, trabajo con jóvenes y
                alcance evangelístico.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-light">
                En septiembre de 2022, adquirieron un nuevo edificio para la
                iglesia en Punta Arenas, Chile, donde continúan sirviendo a la
                comunidad con pasión y fidelidad.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Derek Bio */}
      <section className="bg-forest py-28 sm:py-36">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <RevealSection>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">
              Biografía
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-cream-light sm:text-4xl">
              Derek Hansen
            </h2>
            <div className="section-divider mt-6" />
          </RevealSection>

          <RevealSection className="delay-200">
            <div className="mt-10 space-y-6 text-base leading-relaxed text-sage-light/80">
              <p>
                Derek Hansen es misionero afiliado a Word for the World Baptist Missions.
                Se graduó del Open Door Bible Institute y ha dedicado 24 años al
                ministerio bíblico, trabajo con jóvenes y alcance evangelístico.
              </p>
              <p>
                Su pasión por el evangelismo representa una de sus fortalezas
                principales, brindando numerosas oportunidades para compartir el
                evangelio a nivel mundial.
              </p>
              <p>
                Antes de su llamado al ministerio, Derek sirvió como bombero
                voluntario y empleado del servicio forestal. Pasó 11 años con
                el Servicio Forestal de EE.UU. y trabajó como paracaidista
                forestal (smokejumper) en West Yellowstone y Missoula, Montana.
              </p>
              <p>
                Durante un incendio forestal en Washington, rescató a una mujer
                que necesitaba evacuación médica y más tarde le presentó el
                cristianismo. Ella se convirtió en su esposa. Derek y Alicia
                criaron a dos hijos en el ministerio.
              </p>
            </div>
          </RevealSection>

          <RevealSection className="delay-300 mt-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-sage">
                Intereses personales
              </p>
              <p className="mt-2 text-base text-sage-light/70">
                Fútbol y siestas
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Alicia Bio */}
      <section className="bg-cream-light py-28 sm:py-36">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <RevealSection>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-muted">
              Biografía
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-forest sm:text-4xl">
              Alicia Hansen
            </h2>
            <div className="section-divider mt-6" />
          </RevealSection>

          <RevealSection className="delay-200">
            <div className="mt-10 space-y-6 text-base leading-relaxed text-stone">
              <p>
                Alicia Hansen es misionera con Word for the World Baptist Missions.
                Ha trabajado junto a su esposo en el ministerio durante 24 años,
                aplicando sus habilidades en administración de oficina y gestión
                comunitaria.
              </p>
              <p>
                Sus contribuciones educativas incluyen instrucción cristiana en
                artes del lenguaje y estudios bíblicos para niños de 4 a 12 años,
                además de grupos de mujeres.
              </p>
              <p>
                Ha construido relaciones con iglesias respetadas en EE.UU. que
                apoyan misiones internacionales. Actualmente sirve en América
                Latina con pasión por el testimonio evangélico y el ministerio
                público.
              </p>
              <p>
                Alicia tiene experiencia como capellana voluntaria, es instructora
                certificada de inglés como segundo idioma por TEFL International
                Academy, y posee un título en inglés. Anteriormente sirvió 12
                años como bombera del Servicio Forestal. Educó a sus dos hijos
                en casa mientras estaba en ministerio activo.
              </p>
            </div>
          </RevealSection>

          <RevealSection className="delay-300 mt-8">
            <div className="rounded-xl border border-forest/5 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-forest-muted">
                Actividades familiares
              </p>
              <p className="mt-2 text-base text-stone-light">
                Asados y lectura
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
