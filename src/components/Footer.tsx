"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { click } from "@/data/click";
import { buildMailto } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const iconLink =
  "flex h-10 w-10 items-center justify-center rounded-md border border-line/15 text-fg3 transition-colors hover:border-accent hover:text-accent";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/10 px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-content flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-fg">{profile.displayName}</p>
          <p className="text-sm text-fg3">
            {t.common.role} · {t.common.location}
          </p>
          <p className="text-sm text-fg3">
            {t.footer.founder}{" "}
            <a
              href={click.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-fg2 transition-colors hover:text-accent"
            >
              {click.name}
            </a>
          </p>
          <p className="mt-2 text-sm text-fg4">
            © {year} {profile.displayName}. {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.githubAria}
              className={iconLink}
            >
              <Github size={18} />
            </a>
          )}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.linkedinAria}
              className={iconLink}
            >
              <Linkedin size={18} />
            </a>
          )}
          <a href={buildMailto(profile.email)} aria-label={t.footer.mailAria} className={iconLink}>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
