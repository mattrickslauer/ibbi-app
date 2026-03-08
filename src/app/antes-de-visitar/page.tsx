"use client";

import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

const faqs = [
  {
    question: "¿Dónde están ubicados?",
    answer: "Nuestra iglesia se encuentra en 21 de Mayo 1531, Punta Arenas, Chile 6209100, XII Región de Magallanes.",
  },
  {
    question: "¿Cuánto dura el servicio?",
    answer:
      "Nuestros servicios duran alrededor de 75 minutos y contienen música y enseñanzas de la Biblia que se aplicarán directamente a su vida.",
  },
  {
    question: "¿Cómo debo vestirme?",
    answer:
      "No tenemos un código de vestimenta formal. Queremos que se sienta cómodo y bienvenido tal como es. Venga como se sienta mejor.",
  },
  {
    question: "¿Cómo es la música?",
    answer:
      "El servicio de canciones en IBBI es vibrante y conmovedor. Cantamos canciones del himnario acompañados de un piano.",
  },
  {
    question: "¿Me van a señalar como visitante?",
    answer:
      "No se preocupe, no lo vamos a poner en una situación incómoda. Muchos visitantes nuevos nos acompañan cada semana y queremos que se sienta a gusto.",
  },
  {
    question: "¿Qué hay de las ofrendas?",
    answer:
      "No lo invitamos a Iglesia Bíblica Bautista Internacional por su ofrenda. Si desea dar, puede hacerlo, pero nunca se sentirá presionado.",
  },
  {
    question: "¿Cómo son los mensajes?",
    answer:
      "El Pastor Derek Hansen predica mensajes variados directamente de la Biblia, aplicándolos a la vida cotidiana de una manera práctica y accesible.",
  },
];

export default function AntesDeVisitar() {
  return (
    <main>
      <PageHero
        title="Antes De Visitar"
        subtitle="Te ofrecemos la oportunidad de reunirte los domingos a las 18:00 pm"
      />

      <section className="bg-cream-light py-28 sm:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <RevealSection className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-muted">
              Preguntas Frecuentes
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-forest sm:text-4xl">
              ¿Qué esperar en su visita?
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
                Horarios de Reunión
              </h3>
              <div className="section-divider mx-auto mt-6" />
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  { day: "Domingo", time: "11:00 AM", label: "Reunión Principal" },
                  { day: "Domingo", time: "6:00 PM", label: "Reunión Vespertina" },
                  { day: "Miércoles", time: "7:00 PM", label: "Estudio Bíblico" },
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
