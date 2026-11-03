"use client";

import { useState } from "react";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import MobileToggle from "@/components/MobileToggle";
import { cn } from "@/lib/utils";
import { chapterNumber } from "@/data/chapters";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  // No celular, os dois blocos começam recolhidos
  const [openEducation, setOpenEducation] = useState(false);
  const [openCerts, setOpenCerts] = useState(false);

  return (
    <section id="formacao" className="px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-content gap-16 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left">
          <SectionHeading index={`${chapterNumber("formacao")}.1`} eyebrow={t.education.eyebrowEducation} title={t.education.titleEducation} />

          <MobileToggle
            className="mt-8"
            expanded={openEducation}
            onToggle={() => setOpenEducation((value) => !value)}
            controls="formacao-lista"
            showLabel={`${t.education.show} (${education.length})`}
            hideLabel={t.education.hide}
          />
          <div id="formacao-lista" className={cn("mt-10 space-y-4", !openEducation && "max-md:hidden", "max-md:mt-6")}>
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
        </Reveal>

        <Reveal direction="right" delay={80}>
          <SectionHeading index={`${chapterNumber("formacao")}.2`} eyebrow={t.education.eyebrowCerts} title={t.education.titleCerts} />

          <MobileToggle
            className="mt-8"
            expanded={openCerts}
            onToggle={() => setOpenCerts((value) => !value)}
            controls="certificacoes-lista"
            showLabel={`${t.education.show} (${certifications.length})`}
            hideLabel={t.education.hide}
          />
          <div id="certificacoes-lista" className={cn("mt-10 space-y-4", !openCerts && "max-md:hidden", "max-md:mt-6")}>
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
