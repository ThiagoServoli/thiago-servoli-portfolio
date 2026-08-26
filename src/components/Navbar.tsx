"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-1 z-50 transition-all duration-500 ease-premium",
        scrolled
          ? "border-b border-white/10 bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#inicio"
          data-cursor-hover
          className="font-display text-lg font-bold tracking-[0.15em] text-white"
        >
          THIAGO<span className="text-neon-green">.</span>SERVOLI
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="group relative text-base font-medium text-bone-300 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-neon-green shadow-[0_0_10px_rgba(57,255,136,0.9)] transition-all duration-300 ease-premium group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          data-cursor-hover
          className="hidden rounded-full border-2 border-neon-green/60 px-6 py-2.5 text-base font-semibold text-neon-green transition-all duration-300 hover:bg-neon-green hover:text-ink-950 hover:shadow-[0_0_25px_rgba(57,255,136,0.6)] md:inline-flex"
        >
          Vamos conversar
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Navegação mobile"
          className="flex flex-col gap-1 border-t border-white/10 bg-ink-950 px-6 py-6 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-4 text-lg text-white transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-full bg-neon-green px-5 py-3.5 text-center text-base font-semibold text-ink-950"
          >
            Vamos conversar
          </a>
        </nav>
      )}
    </header>
  );
}
