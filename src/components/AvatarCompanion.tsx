"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import AvatarFigure from "@/components/AvatarFigure";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["inicio", "sobre", "stack", "projetos", "trajetoria", "formacao", "contato"] as const;
type SectionId = (typeof SECTION_IDS)[number];

const WAVE_SECTIONS: SectionId[] = ["inicio", "contato"];
const DESKTOP = "(min-width: 1024px)";
// Tamanho do avatar no desktop (proporção do SVG: 200 × 250)
const W = 112;
const H = 140;

/**
 * Avatar que acompanha a navegação. No desktop ele voa até o "ponto de pouso"
 * da seção ativa (elementos com data-avatar-slot, com escala opcional em
 * data-avatar-scale), com inércia e inclinação na direção do movimento. Se o
 * ponto de pouso sai da tela, ele "estaciona" pequeno no canto inferior
 * esquerdo para nunca cobrir o conteúdo. No mobile vira um selo no canto, e as
 * falas só aparecem ao tocar.
 *
 * Desempenho: um único loop de requestAnimationFrame que roda apenas enquanto
 * o avatar está se movendo; parado, não consome nada.
 */
export default function AvatarCompanion() {
  const { t } = useLanguage();
  const active = useActiveSection([...SECTION_IDS]) as SectionId;
  const wrapRef = useRef<HTMLDivElement>(null);
  const figRef = useRef<HTMLDivElement>(null);
  const kickRef = useRef<() => void>(() => {});
  const activeRef = useRef<SectionId>(active);
  const [bubble, setBubble] = useState(false);
  const [waving, setWaving] = useState(false);
  const [visible, setVisible] = useState(false);

  // Fala ao chegar em cada seção (só no desktop: no mobile cobriria o texto)
  useEffect(() => {
    activeRef.current = active;
    kickRef.current();
    if (!window.matchMedia(DESKTOP).matches) return;
    setBubble(true);
    const timer = window.setTimeout(() => setBubble(false), 3800);
    return () => window.clearTimeout(timer);
  }, [active]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fig = figRef.current;
    if (!wrap || !fig) return;

    const desktop = window.matchMedia(DESKTOP);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pos = { x: -1, y: -1, s: 1 };
    const look = { x: 0, y: 0 };
    let lean = 0;
    let raf = 0;

    const targetFor = () => {
      if (!desktop.matches) return null;
      const slot = document.querySelector<HTMLElement>(`[data-avatar-slot="${activeRef.current}"]`);
      if (!slot) return null;
      const r = slot.getBoundingClientRect();
      const onScreen = r.bottom > 90 && r.top < window.innerHeight - 30;
      if (!onScreen) {
        // Estacionado: escala menor, encostado no canto inferior esquerdo.
        // A escala é ancorada na base central, daí a compensação em x.
        const s = 0.62;
        return { x: 16 - (W * (1 - s)) / 2, y: window.innerHeight - 16 - H, s, parked: true };
      }
      const x = r.left + r.width / 2 - W / 2;
      const y = r.bottom - H;
      return {
        x: Math.min(Math.max(x, 12), window.innerWidth - W - 12),
        y: Math.min(Math.max(y, 76), window.innerHeight - H - 12),
        s: Number(slot.dataset.avatarScale ?? 1),
        parked: false,
      };
    };

    const tick = () => {
      raf = 0;
      const target = targetFor();
      if (!target) {
        wrap.style.transform = "";
        return;
      }
      if (pos.x < 0 || reduced) {
        pos.x = target.x;
        pos.y = target.y;
        pos.s = target.s;
      }
      const dx = target.x - pos.x;
      const dy = target.y - pos.y;
      const ds = target.s - pos.s;
      pos.x += dx * 0.09;
      pos.y += dy * 0.09;
      pos.s += ds * 0.12;
      lean += (Math.max(-16, Math.min(16, dx * 0.08)) - lean) * 0.2;

      // A escala vai só na figura (ancorada na base): o balão mantém o tamanho
      // do texto e acompanha a altura da cabeça via --s
      wrap.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      wrap.style.setProperty("--s", pos.s.toFixed(3));
      wrap.dataset.parked = String(target.parked);
      fig.style.transform = `rotate(${lean}deg) scale(${pos.s})`;
      // Em voo, olha para onde vai; parado, olha para o cursor
      const flying = Math.abs(dx) + Math.abs(dy) > 6;
      fig.style.setProperty("--lx", String(flying ? Math.sign(dx) * 0.9 : look.x));
      fig.style.setProperty("--ly", String(flying ? Math.sign(dy) * 0.4 : look.y));
      // Balão do lado em que houver espaço
      wrap.dataset.side = pos.x > window.innerWidth - W - 300 ? "left" : "right";

      if (flying || Math.abs(lean) > 0.05 || Math.abs(ds) > 0.002) raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    kickRef.current = kick;

    const onPointerMove = (event: PointerEvent) => {
      const r = fig.getBoundingClientRect();
      look.x = Math.max(-1, Math.min(1, (event.clientX - (r.left + r.width / 2)) / 400));
      look.y = Math.max(-1, Math.min(1, (event.clientY - (r.top + r.height * 0.45)) / 400));
      fig.style.setProperty("--lx", look.x.toFixed(3));
      fig.style.setProperty("--ly", look.y.toFixed(3));
    };

    const onLayout = () => {
      if (!desktop.matches) {
        wrap.style.transform = "";
        wrap.style.removeProperty("--s");
        fig.style.transform = "";
        wrap.dataset.parked = "false";
      }
      kick();
    };

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", onLayout);
    desktop.addEventListener("change", onLayout);
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }
    kick();
    setVisible(true);

    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", onLayout);
      desktop.removeEventListener("change", onLayout);
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onPoke = useCallback(() => {
    setWaving(true);
    setBubble(true);
    window.setTimeout(() => setWaving(false), 2200);
    window.setTimeout(() => setBubble(false), 3800);
  }, []);

  const pose = waving || WAVE_SECTIONS.includes(active) ? "wave" : "idle";

  return (
    <div
      ref={wrapRef}
      data-side="right"
      data-parked="false"
      className={cn(
        "group/av pointer-events-none fixed bottom-4 left-4 z-[45] h-14 w-14 transition-opacity duration-500 lg:bottom-auto lg:left-0 lg:top-0 lg:h-[140px] lg:w-[112px]",
        visible ? "opacity-100" : "opacity-0"
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute bottom-[115%] left-0 w-max max-w-[220px] rounded-xl rounded-bl-sm border border-line/10 bg-card px-3.5 py-2 text-sm font-semibold text-fg shadow-lg transition-all duration-300 lg:bottom-[calc(var(--s,1)*78%)] lg:left-[calc(50%_+_var(--s,1)*20%)]",
          "group-data-[side=left]/av:lg:left-auto group-data-[side=left]/av:lg:right-[calc(50%_+_var(--s,1)*20%)] group-data-[side=left]/av:lg:rounded-bl-xl group-data-[side=left]/av:lg:rounded-br-sm",
          bubble ? "translate-y-0 opacity-100 group-data-[parked=true]/av:opacity-0" : "translate-y-2 opacity-0"
        )}
      >
        {t.avatar[active]}
      </div>
      <div
        ref={figRef}
        data-pose={pose}
        onClick={onPoke}
        onMouseEnter={() => setBubble(true)}
        onMouseLeave={() => setBubble(false)}
        className="av av-companion pointer-events-auto h-full w-full origin-bottom cursor-pointer max-lg:overflow-hidden max-lg:rounded-full max-lg:border max-lg:border-line/15 max-lg:bg-card max-lg:shadow-lg"
      >
        <AvatarFigure className="h-full w-full max-lg:h-[125%]" />
      </div>
    </div>
  );
}
