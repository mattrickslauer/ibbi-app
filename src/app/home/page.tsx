"use client";

import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";

/* ─── Hero ────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <Image src="/building.jpg" alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-forest/90" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[15%] left-[10%] h-72 w-72 rounded-full bg-gold/5 blur-3xl" style={{ animation: "gentlePulse 8s ease-in-out infinite" }} />
        <div className="absolute bottom-[20%] right-[15%] h-96 w-96 rounded-full bg-sage/10 blur-3xl" style={{ animation: "gentlePulse 10s ease-in-out infinite 2s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-cream/80">
            Punta Arenas, Patagonia
          </span>
        </div>

        <h1 className="animate-fade-up delay-200 font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Welcome
        </h1>

        <p className="animate-fade-up delay-400 mx-auto mt-8 max-w-2xl font-[family-name:var(--font-display)] text-xl leading-relaxed text-cream/70 italic sm:text-2xl">
          A place of faith, hope and community
        </p>

        <p className="animate-fade-up delay-500 mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/50 sm:text-lg">
          Good News — there is hope at the Cross, where Christ can transform
          anyone. We always have space for you at the IBBI community.
        </p>

        <div className="animate-fade-up delay-600 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full bg-cream-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-forest transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-white/10"
          >
            Service Times
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream/80 transition-all duration-300 hover:border-white/40 hover:text-white"
          >
            Are You New Here?
          </a>
        </div>

        <div className="animate-fade-in delay-800 mt-20 flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cream/30">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-cream/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ─── Service Times ───────────────────────────────────── */

function ServiceTimes() {
  const services = [
    { day: "Sunday", time: "11:00 AM", label: "English Service", desc: "Worship, praise, and preaching of God's Word." },
    { day: "Sunday", time: "6:00 PM", label: "Spanish Service", desc: "Bible study and fellowship in Spanish." },
    { day: "Wednesday", time: "7:00 PM", label: "Bible Study", desc: "Deep study of Scripture and prayer in Spanish." },
  ];

  return (
    <section id="services" className="cross-pattern relative overflow-hidden bg-cream-light py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <RevealSection className="mb-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-muted">Join Us</span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-forest sm:text-5xl">
            Service Times
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </RevealSection>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <RevealSection key={i} className={`delay-${(i + 2) * 100}`}>
              <div className="card-lift group relative h-full overflow-hidden rounded-2xl border border-forest/5 bg-white p-8 sm:p-10">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-forest to-forest-muted opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-muted">{s.day}</span>
                <div className="mt-6 font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-forest sm:text-5xl">{s.time}</div>
                <h3 className="mt-4 text-lg font-semibold text-charcoal">{s.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-light">{s.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About / Location ────────────────────────────────── */

function About() {
  return (
    <section className="relative overflow-hidden bg-forest py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-sage blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <RevealSection animation="animate-slide-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-tl-3xl border-t-2 border-l-2 border-gold/30" />
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-br-3xl border-r-2 border-b-2 border-gold/30" />
              <div className="overflow-hidden rounded-2xl">
                <Image src="/building.jpg" alt="IBBI Church Building" width={640} height={640} className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </RevealSection>

          <RevealSection animation="animate-slide-left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">Our Church</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium leading-snug tracking-tight text-cream-light sm:text-4xl lg:text-5xl text-balance">
              A spiritual home at the end of the world
            </h2>
            <div className="section-divider mt-6" />
            <p className="mt-8 text-lg leading-relaxed text-sage-light/80">
              There is a safe place to grow your faith. We believe there is hope
              in Christ. Maybe you feel like &ldquo;this cannot be all there is
              to life.&rdquo; We always have space for you at the IBBI community.
            </p>
            <div className="mt-10 flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-cream-light">21 de Mayo 1531</p>
                <p className="mt-1 text-sm text-sage-light/60">Punta Arenas, Chile 6209100<br />XII Región de Magallanes</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Cards ───────────────────────────────────────── */

function CTACards() {
  return (
    <section className="relative overflow-hidden bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <RevealSection className="mb-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-muted">Get to Know Us</span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-forest sm:text-5xl">We&apos;re Waiting for You</h2>
          <div className="section-divider mx-auto mt-6" />
        </RevealSection>

        <div className="grid gap-8 md:grid-cols-2">
          <RevealSection className="delay-200">
            <Link href="/antes-de-visitar" className="card-lift group relative block overflow-hidden rounded-3xl bg-forest p-10 sm:p-12">
              <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-sage/10 blur-[80px] transition-all duration-700 group-hover:bg-sage/20" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <svg className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-medium text-cream-light">Are You New Here?</h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-sage-light/70">
                  First time visiting? We want you to feel welcome. Learn what to expect when you visit us.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold transition-colors duration-300 group-hover:text-gold-muted">
                  Learn More
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </RevealSection>

          <RevealSection className="delay-400">
            <Link href="/pastor-y-equipo" className="card-lift group relative block overflow-hidden rounded-3xl border border-forest/8 bg-white p-10 sm:p-12">
              <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-forest/5 blur-[80px] transition-all duration-700 group-hover:bg-forest/10" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5">
                  <svg className="h-7 w-7 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-medium text-forest">Pastor Derek Hansen</h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-stone-light">
                  Meet our pastor and his wife, who have dedicated their lives to serving with love and faithfulness to the gospel.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-forest transition-colors duration-300 group-hover:text-forest-muted">
                  Learn More
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Scripture ───────────────────────────────────────── */

function Scripture() {
  return (
    <section className="relative overflow-hidden bg-cream-light py-28 sm:py-36">
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 font-[family-name:var(--font-display)] text-[20rem] leading-none text-forest/[0.03]">&ldquo;</div>
      <RevealSection animation="animate-scale-in" className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="section-divider mx-auto mb-10" />
        <blockquote className="font-[family-name:var(--font-display)] text-2xl leading-relaxed tracking-tight text-forest italic sm:text-3xl md:text-4xl text-balance">
          &ldquo;Finally, be ye all of one mind, having compassion one of
          another, love as brethren, be pitiful, be courteous.&rdquo;
        </blockquote>
        <cite className="mt-8 block text-sm font-semibold not-italic uppercase tracking-[0.2em] text-forest-muted">
          1 Peter 3:8
        </cite>
        <div className="section-divider mx-auto mt-10" />
      </RevealSection>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────── */

export default function HomeEN() {
  return (
    <main>
      <Hero />
      <ServiceTimes />
      <About />
      <CTACards />
      <Scripture />
    </main>
  );
}
