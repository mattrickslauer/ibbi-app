"use client";

import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

const faqs = [
  {
    question: "Where are you located?",
    answer: "Our church is at 21 de Mayo 1531, Punta Arenas, Chile 6209100, XII Región de Magallanes.",
  },
  {
    question: "How long is the service?",
    answer:
      "Our services last about 75 minutes and include music and Bible teaching that applies directly to your life.",
  },
  {
    question: "What should I wear?",
    answer:
      "We don't have a formal dress code. We want you to feel comfortable and welcome just as you are. Come dressed however you feel best.",
  },
  {
    question: "What is the music like?",
    answer:
      "The song service at IBBI is vibrant and moving. We sing hymns from the hymnal, accompanied by piano.",
  },
  {
    question: "Will I be singled out as a visitor?",
    answer:
      "Don't worry, we won't put you in an awkward spot. Many new visitors join us every week and we want you to feel at ease.",
  },
  {
    question: "What about the offering?",
    answer:
      "We don't invite you to Iglesia Bíblica Bautista Internacional for your offering. If you'd like to give, you may, but you will never feel pressured.",
  },
  {
    question: "What are the messages like?",
    answer:
      "Pastor Derek Hansen preaches a variety of messages straight from the Bible, applying them to everyday life in a practical, approachable way.",
  },
];

export default function BeforeYouVisit() {
  return (
    <main>
      <PageHero
        title="Before You Visit"
        subtitle="We invite you to join us on Sundays at 6:00 PM"
      />

      <section className="bg-cream-light py-28 sm:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <RevealSection className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-muted">
              Frequently Asked Questions
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-forest sm:text-4xl">
              What to expect on your visit
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </RevealSection>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <RevealSection key={i} className={`delay-${Math.min((i + 1) * 100, 800)}`}>
                <div className="card-lift rounded-2xl border border-forest/5 bg-white p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-forest">
                    {faq.question}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-stone">
                    {faq.answer}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Service info card */}
          <RevealSection className="mt-16">
            <div className="rounded-3xl bg-forest p-10 sm:p-12 text-center">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium text-cream-light sm:text-3xl">
                Service Times
              </h3>
              <div className="section-divider mx-auto mt-6" />
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  { day: "Sunday", time: "11:00 AM", label: "Main Service" },
                  { day: "Sunday", time: "6:00 PM", label: "Evening Service" },
                  { day: "Wednesday", time: "7:00 PM", label: "Bible Study" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <span className="text-xs font-semibold uppercase tracking-widest text-sage">{s.day}</span>
                    <div className="mt-2 font-[family-name:var(--font-display)] text-3xl font-medium text-cream-light">
                      {s.time}
                    </div>
                    <p className="mt-2 text-sm text-sage-light/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
