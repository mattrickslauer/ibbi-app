"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const linksES = [
  { label: "Inicio", href: "/" },
  { label: "Antes de Visitar", href: "/antes-de-visitar" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Ministerios", href: "/ministerios" },
  { label: "Contacto", href: "/contacto" },
];

const subMenuES: Record<string, { label: string; href: string }[]> = {
  "/quienes-somos": [
    { label: "Nuestras Creencias", href: "/quienes-somos#creencias" },
    { label: "Pastor y Esposa", href: "/pastor-y-equipo" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const heroPage = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        heroPage
          ? "bg-transparent"
          : "nav-glass" + (scrolled ? " scrolled" : "")
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="IBBI Logo"
            width={44}
            height={44}
            className={`transition-all duration-300 group-hover:scale-105 ${
              heroPage ? "brightness-0 invert" : ""
            }`}
          />
          <span
            className={`hidden font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight sm:block transition-colors duration-300 ${
              heroPage ? "text-cream-light" : "text-forest"
            }`}
          >
            IBBI
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {linksES.map((link) => {
            const sub = subMenuES[link.href];
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300
                    after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:-translate-x-1/2
                    ${
                      heroPage
                        ? "text-cream-light/80 hover:text-white hover:after:w-6 after:bg-gold"
                        : "text-stone hover:text-forest hover:after:w-6 after:bg-gold"
                    }
                    ${isActive ? "after:!w-6" : ""}
                  `}
                >
                  {link.label}
                </Link>
                {sub && (
                  <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="rounded-xl border border-forest/5 bg-white/95 backdrop-blur-lg p-2 shadow-xl min-w-[200px]">
                      {sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-stone transition-colors hover:bg-cream hover:text-forest"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Language toggle */}
          <Link
            href={pathname === "/home" ? "/" : "/home"}
            className={`ml-4 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
              heroPage
                ? "border-white/20 text-cream-light/70 hover:border-white/40 hover:text-white"
                : "border-forest/10 text-stone-light hover:border-forest/30 hover:text-forest"
            }`}
          >
            {pathname === "/home" ? "ES" : "EN"}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
            heroPage
              ? "text-cream-light hover:bg-white/10"
              : "text-forest hover:bg-forest/5"
          }`}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileOpen ? "max-h-[500px] pb-6" : "max-h-0"
        } ${heroPage ? "" : "bg-white/95 backdrop-blur-lg"}`}
      >
        <div className="flex flex-col items-center gap-1 px-6">
          {linksES.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`w-full rounded-lg py-3 text-center text-sm font-medium uppercase tracking-wider transition-colors ${
                heroPage
                  ? "text-cream-light/80 hover:bg-white/10 hover:text-white"
                  : "text-stone hover:bg-cream hover:text-forest"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Sub links */}
          <Link
            href="/pastor-y-equipo"
            className={`w-full rounded-lg py-3 text-center text-sm font-medium uppercase tracking-wider transition-colors ${
              heroPage
                ? "text-cream-light/60 hover:bg-white/10 hover:text-white"
                : "text-stone-light hover:bg-cream hover:text-forest"
            }`}
          >
            Pastor y Esposa
          </Link>
          <Link
            href={pathname === "/home" ? "/" : "/home"}
            className={`mt-2 w-full rounded-lg border py-3 text-center text-xs font-semibold uppercase tracking-widest transition-colors ${
              heroPage
                ? "border-white/20 text-cream-light/70"
                : "border-forest/10 text-stone-light"
            }`}
          >
            {pathname === "/home" ? "Español" : "English"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
