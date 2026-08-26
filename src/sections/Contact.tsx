import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { buildMailto } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-white/10 px-6 py-36 lg:px-10"
    >
      <Reveal className="relative mx-auto max-w-content text-center">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-neon-green">
          Contato
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-tight text-white text-balance sm:text-6xl">
          Vamos construir algo <span className="text-neon-gradient">incrível</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-balance text-xl text-bone-300">
          Estou aberto a novos desafios, projetos e oportunidades.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <MagneticButton href={buildMailto(profile.email)}>
            Entrar em contato
          </MagneticButton>
          {profile.socials.github && (
            <MagneticButton href={profile.socials.github} variant="secondary" external>
              <Github size={18} />
              GitHub
            </MagneticButton>
          )}
          {profile.socials.linkedin && (
            <MagneticButton href={profile.socials.linkedin} variant="secondary" external>
              <Linkedin size={18} />
              LinkedIn
            </MagneticButton>
          )}
        </div>

        <p className="mt-10 font-mono text-lg text-bone-500">{profile.email}</p>
      </Reveal>
    </section>
  );
}
