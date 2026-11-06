"use client";

import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

export default function PastorAndWife() {
  return (
    <main>
      <PageHero
        title="Pastor and Wife"
        subtitle="Serving with love and faithfulness in Punta Arenas"
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
                    alt="Derek and Alicia Hansen"
                    width={600}
                    height={600}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </RevealSection>

            <RevealSection animation="animate-slide-left">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-muted">
                Our Pastor
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-forest sm:text-4xl">
                Derek &amp; Alicia Hansen
              </h2>
              <div className="section-divider mt-6" />
              <p className="mt-8 text-lg leading-relaxed text-stone">
                Missionaries with Word for the World Baptist Missions (based in
                Rossville, Georgia), Derek and Alicia have devoted more than 24
                years to Bible ministry, youth work and evangelistic outreach.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-light">
                In September 2022 they acquired a new church building in Punta
                Arenas, Chile, where they continue to serve the community with
                passion and faithfulness.
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
              Biography
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-cream-light sm:text-4xl">
              Derek Hansen
            </h2>
            <div className="section-divider mt-6" />
          </RevealSection>

          <RevealSection className="delay-200">
            <div className="mt-10 space-y-6 text-base leading-relaxed text-sage-light/80">
              <p>
                Derek Hansen is a missionary with Word for the World Baptist
                Missions. He graduated from Open Door Bible Institute and has
                devoted 24 years to Bible ministry, youth work and evangelistic
                outreach.
              </p>
              <p>
                His passion for evangelism is one of his greatest strengths,
                opening many opportunities to share the gospel around the world.
              </p>
              <p>
                Before his call to ministry, Derek served as a volunteer
                firefighter and forest service employee. He spent 11 years with
                the U.S. Forest Service and worked as a smokejumper in West
                Yellowstone and Missoula, Montana.
              </p>
              <p>
                During a wildfire in Washington, he rescued a woman who needed
                medical evacuation and later introduced her to Christianity. She
                became his wife. Derek and Alicia raised two children in the
                ministry.
              </p>
            </div>
          </RevealSection>

          <RevealSection className="delay-300 mt-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-sage">
                Personal interests
              </p>
              <p className="mt-2 text-base text-sage-light/70">
                Soccer and naps
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
              Biography
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-forest sm:text-4xl">
              Alicia Hansen
            </h2>
            <div className="section-divider mt-6" />
          </RevealSection>

          <RevealSection className="delay-200">
            <div className="mt-10 space-y-6 text-base leading-relaxed text-stone">
              <p>
                Alicia Hansen is a missionary with Word for the World Baptist
                Missions. She has worked alongside her husband in ministry for
                24 years, putting her skills in office administration and
                community management to use.
              </p>
              <p>
                Her teaching has included Christian instruction in language arts
                and Bible studies for children ages 4 to 12, as well as women&apos;s
                groups.
              </p>
              <p>
                She has built relationships with respected churches in the U.S.
                that support international missions. She now serves in Latin
                America with a passion for evangelistic witness and public
                ministry.
              </p>
              <p>
                Alicia has experience as a volunteer chaplain, is a certified
                English as a Second Language instructor through TEFL
                International Academy, and holds a degree in English. She
                previously served 12 years as a Forest Service firefighter. She
                homeschooled her two children while in active ministry.
              </p>
            </div>
          </RevealSection>

          <RevealSection className="delay-300 mt-8">
            <div className="rounded-xl border border-forest/5 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-forest-muted">
                Family activities
              </p>
              <p className="mt-2 text-base text-stone-light">
                Barbecues and reading
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
