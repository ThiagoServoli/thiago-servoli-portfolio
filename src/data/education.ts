export interface EducationItem {
  institution: string;
  course: string;
  level: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    institution: "Impacta Tecnologia",
    level: "Curso Superior de Tecnologia (CST)",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "2020 – 2021",
  },
  {
    institution: "Senac Brasil",
    level: "Curso Técnico Integrado",
    course: "Tecnologia da Informação",
    period: "2018 – 2019",
  },
];
