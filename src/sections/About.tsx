import { profile } from "@/data/profile";
import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";

export default function About() {
  const [p1, p2, p3, p4] = profile.summary;

  return (
    <section id="sobre" className="border-t border-white/10 px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal direction="left" className="lg:col-span-4">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-neon-green">
              Sobre
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Front-end no coração,{" "}
              <span className="text-neon-gradient">full stack</span> na prática
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:col-span-8 sm:grid-cols-2">
            <Reveal delay={0} className="sm:col-span-2">
              <p className="card-glass rounded-2xl p-7 text-lg leading-relaxed text-bone-300">
                {p1}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="card-glass rounded-2xl p-7 text-lg leading-relaxed text-bone-300">
                {p2}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="card-glass rounded-2xl p-7 text-lg leading-relaxed text-bone-300">
                {p3}
              </p>
            </Reveal>
            <Reveal delay={240} className="sm:col-span-2">
              <p className="card-neon-border rounded-2xl border border-neon-green/25 bg-neon-green/[0.06] p-7 text-lg leading-relaxed text-white">
                {p4}
              </p>
            </Reveal>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-14 sm:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-5xl font-bold text-neon-green sm:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
              <p className="mt-2 text-base text-bone-500">{stat.label}</p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
