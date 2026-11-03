import { technologies } from "@/data/technologies";

export const profile = {
  name: "Thiago Servoli da Silva",
  displayName: "Thiago Servoli",
  email: "contatothisz@gmail.com",
  /** WhatsApp pessoal (só dígitos, com DDI): recebe as mensagens do formulário */
  whatsapp: "5511981118056",
  socials: {
    github: "https://github.com/ThiagoServoli",
    linkedin: "https://www.linkedin.com/in/thiagoservoli/",
    instagram: null,
  },
  /*
   * Valores fixos (não calculados pela data) para o HTML estático e o JS do
   * navegador mostrarem sempre o mesmo número. Atualize a cada aniversário:
   * tecnologia desde jul/2019, Grupo In Press desde ago/2021.
   */
  stats: [
    { value: 7, suffix: "+" },
    { value: 5, suffix: "+" },
    { value: technologies.filter((tech) => !tech.learning).length, suffix: "" },
  ],
  /** Marcos da trajetória; os textos de cada um ficam em translations.ts (journey.items) */
  timeline: [
    { year: "2018" },
    { year: "2019–2020" },
    { year: "2020–2021" },
    { year: "2021–2026" },
    { year: "2025" },
    { year: "2026" },
  ],
};

export type Profile = typeof profile;
