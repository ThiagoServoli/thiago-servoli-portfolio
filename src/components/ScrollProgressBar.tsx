"use client";

import { useEffect, useState } from "react";

/**
 * Barra de progresso neon no topo da página. É a prova visual mais direta
 * de que a rolagem está sendo respondida em tempo real.
 */
export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-neon-greenDim via-neon-green to-neon-greenSoft transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 12px rgba(57,255,136,0.7), 0 0 24px rgba(57,255,136,0.4)",
        }}
      />
    </div>
  );
}
