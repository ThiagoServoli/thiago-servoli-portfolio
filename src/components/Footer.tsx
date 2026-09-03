"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { buildMailto } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line/10 px-6 py-14 lg:px-10">
      <div className="mx-auto flex max-w-content flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-fg">{profile.displayName}</p>
          <p className="mt-1 text-base text-fg3">{t.common.role}</p>
          <p className="mt-1 text-base text-fg3">{t.common.location}</p>
        </div>

        <div className="flex items-center gap-4">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.githubAria}
              data-cursor-hover
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-line/10 text-fg2 transition-all duration-300 hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_20px_rgba(57,255,136,0.4)]"
            >
              <Github size={20} />
            </a>
          )}

          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.linkedinAria}
              data-cursor-hover
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-line/10 text-fg2 transition-all duration-300 hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_20px_rgba(57,255,136,0.4)]"
            >
              <Linkedin size={20} />
            </a>
          )}

          <a
            href={buildMailto(profile.email)}
            aria-label={t.footer.mailAria}
            data-cursor-hover
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-line/10 text-fg2 transition-all duration-300 hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_20px_rgba(57,255,136,0.4)]"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-content font-mono text-sm text-fg4">
        © {year} {profile.displayName}. {t.footer.rights}
      </p>
    </footer>
  );
}

