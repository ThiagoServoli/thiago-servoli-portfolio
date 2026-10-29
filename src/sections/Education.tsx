"use client";

import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="formacao" className="px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-content gap-16 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left">
          <SectionHeading eyebrow={t.education.eyebrowEducation} title={t.education.titleEducation} />

          <div className="mt-10 space-y-4">
            {education.map((item, i) => {
              const copy = t.education.items[i];
              return (
                <div
                  key={item.institution}
                  className="rounded-xl border border-line/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
                >
                  <p className="text-sm font-medium text-fg3">{item.period}</p>
                  <p className="mt-1 text-lg font-bold text-fg">{item.institution}</p>
                  <p className="text-fg2">
                    {copy.level} — {copy.course}
                  </p>
                </div>
              );
            })}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {t.education.knowledgeAreas.map((area) => (
              <li
                key={area}
                className="rounded-md border border-line/10 bg-card px-3 py-1 text-sm text-fg2"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="right" delay={80}>
          <SectionHeading eyebrow={t.education.eyebrowCerts} title={t.education.titleCerts} />

          <div className="mt-10 space-y-4">
            {certifications.map((cert, i) => {
              const copy = t.education.certifications[i];
              return (
                <div
                  key={cert.title}
                  className="rounded-xl border border-line/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
                >
                  <p className="text-sm font-semibold text-accent">{cert.issuer}</p>
                  <p className="mt-1 text-lg font-bold text-fg">{copy.title}</p>
                  <p className="text-fg3">
                    {t.education.issuedAt} {copy.issuedAt}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
