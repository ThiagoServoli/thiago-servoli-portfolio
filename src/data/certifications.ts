export interface Certification {
  issuer: string;
  title: string;
  issuedAt: string;
}

export const certifications: Certification[] = [
  {
    issuer: "FIAP",
    title: "User Experience",
    issuedAt: "Fevereiro de 2022",
  },
  {
    issuer: "DIO",
    title: "Programação para Internet com JavaScript",
    issuedAt: "Maio de 2021",
  },
];
