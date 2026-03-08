"use client";

import { useState } from "react";
import RevealSection from "@/components/RevealSection";
import PageHero from "@/components/PageHero";

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", asunto: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, simulate sending
    setStatus("sent");
    setFormData({ nombre: "", asunto: "", mensaje: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <main>
      <PageHero
        title="Contacto"
        subtitle="Nos encantaría saber de usted"
      />

      <section className="bg-cream-light py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Contact info */}
            <RevealSection animation="animate-slide-right">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-muted">
                Información
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-forest sm:text-4xl">
                Encuéntrenos
              </h2>
              <div className="section-divider mt-6" />

              <div className="mt-10 space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/5">
                    <svg className="h-6 w-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-forest-muted">
                      Lugar
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-stone">
                      21 de Mayo 1531<br />
                      Punta Arenas, Chile 6209100<br />
                      XII Región de Magallanes
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/5">
                    <svg className="h-6 w-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-forest-muted">
                      Correo Electrónico
                    </h3>
                    <a
                      href="mailto:ibbichile.com@gmail.com"
                      className="mt-2 block text-base text-forest transition-colors hover:text-forest-muted"
                    >
                      ibbichile.com@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/5">
                    <svg className="h-6 w-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-forest-muted">
                      Teléfono
                    </h3>
                    <a
                      href="tel:+56958475973"
                      className="mt-2 block text-base text-forest transition-colors hover:text-forest-muted"
                    >
                      +56 9 58475973
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/5">
                    <svg className="h-6 w-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-forest-muted">
                      Redes Sociales
                    </h3>
                    <div className="mt-3 flex gap-3">
                      <a
                        href="https://www.facebook.com/iglesiabiblicabautistainternacional/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/10 text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UC1kcaxdBlw6DaYJGDE-1NZQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/10 text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-white"
                        aria-label="YouTube"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com/labibliapuq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/10 text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-white"
                        aria-label="Instagram"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Contact form */}
            <RevealSection animation="animate-slide-left">
              <div className="rounded-3xl border border-forest/5 bg-white p-8 sm:p-10">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-forest">
                  Envíenos un Mensaje
                </h2>
                <div className="section-divider mt-4" />

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium uppercase tracking-wider text-forest-muted">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      placeholder="Ingrese su nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-forest/10 bg-cream-light/50 px-4 py-3 text-charcoal placeholder:text-stone-light/60 transition-colors focus:border-forest/30 focus:outline-none focus:ring-2 focus:ring-forest/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium uppercase tracking-wider text-forest-muted">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="asunto"
                      required
                      placeholder="Ingrese un correo válido"
                      value={formData.asunto}
                      onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-forest/10 bg-cream-light/50 px-4 py-3 text-charcoal placeholder:text-stone-light/60 transition-colors focus:border-forest/30 focus:outline-none focus:ring-2 focus:ring-forest/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium uppercase tracking-wider text-forest-muted">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={5}
                      placeholder="Ingrese su mensaje"
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="mt-2 w-full resize-none rounded-xl border border-forest/10 bg-cream-light/50 px-4 py-3 text-charcoal placeholder:text-stone-light/60 transition-colors focus:border-forest/30 focus:outline-none focus:ring-2 focus:ring-forest/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream-light transition-all duration-300 hover:bg-forest-light hover:shadow-lg"
                  >
                    Mandar
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>

                  {status === "sent" && (
                    <div className="rounded-xl bg-forest/5 p-4 text-center">
                      <p className="text-sm font-semibold text-forest">
                        ¡Mensaje Enviado!
                      </p>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="rounded-xl bg-red-50 p-4 text-center">
                      <p className="text-sm font-semibold text-red-600">
                        Mensaje falló. Por favor intente de nuevo.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </main>
  );
}
