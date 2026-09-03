"use client";

import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="formacao" className="border-t border-line/10 px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal direction="left">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-neon-green">
                {t.education.eyebrowEducation}
              </p>
              <h2 className="mt-4 mb-10 font-display text-3xl font-bold text-fg sm:text-4xl">
                {t.education.titleEducation}
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6">
              {education.map((item, i) => {
                const copy = t.education.items[i];
                return (
                  <Reveal key={item.institution} direction="left" delay={i * 100}>
                    <div className="border-l-4 border-neon-green/50 pl-5">
                      <p className="font-mono text-sm text-fg3">{item.period}</p>
                      <p className="mt-1 font-display text-xl font-bold text-fg">
                        {item.institution}
                      </p>
                      <p className="text-lg text-fg2">
                        {copy.level} — {copy.course}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={220} className="mt-10 flex flex-wrap gap-2">
              {t.education.knowledgeAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-line/10 bg-line/5 px-3.5 py-1.5 text-sm text-fg2"
                >
                  {area}
                </span>
              ))}
            </Reveal>
          </div>

          <div>
            <Reveal direction="right">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-neon-green">
                {t.education.eyebrowCerts}
              </p>
              <h2 className="mt-4 mb-10 font-display text-3xl font-bold text-fg sm:text-4xl">
                {t.education.titleCerts}
              </h2>
            </Reveal>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => {
                const copy = t.education.certifications[i];
                return (
                  <Reveal key={cert.title} direction="right" delay={i * 100}>
                    <div className="card-glass card-neon-border rounded-2xl p-7">
                      <p className="font-mono text-sm font-bold uppercase tracking-wider text-neon-green">
                        {cert.issuer}
                      </p>
                      <p className="mt-2 font-display text-xl font-bold text-fg">{copy.title}</p>
                      <p className="mt-1 text-base text-fg3">
                        {t.education.issuedAt} {copy.issuedAt}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
