export interface Award {
  title: string;
  subtitle: string;
  description: string;
  institution: string;
  location: string;
  date: string;
}

const awards: Award[] = [
  {
    title: "Third Place Winner – ICPC National Stage",
    subtitle: "International Collegiate Programming Contest (ICPC)",
    institution: "Universidad Privada San Francisco de Asís",
    location: "La Paz, Bolivia",
    date: "2022-10-1",
    description:
      "Achieved third place in the national ICPC competition, demonstrating strong algorithmic problem-solving and teamwork skills.",
  },
  {
    title: "Organizer – NASA International Space Apps Challenge",
    subtitle: "Global Hackathon",
    institution: "Universidad Privada Boliviana",
    location: "La Paz, Bolivia",
    date: "2023-10-1",
    description:
      "Coordinated and organized the local edition of the NASA Space Apps Challenge, supporting multidisciplinary teams and event logistics.",
  },
  {
    title: "Eighth Place Nationwide – CPC Regional Stage",
    subtitle: "Collegiate Programming Contest (CPC)",
    institution: "Universidad Privada Boliviana",
    location: "La Paz, Bolivia",
    date: "2023-11-1",
    description:
      "Ranked eighth at the national level during the regional CPC stage, competing against top university teams nationwide.",
  },
  {
    title: "Participant – ICPC Regional Stage",
    subtitle: "International Collegiate Programming Contest (ICPC)",
    institution: "Universidad Privada Boliviana",
    location: "La Paz, Bolivia",
    date: "2024-11-1",
    description:
      "Participated in the ICPC regional stage, applying advanced data structures and algorithms under competitive time constraints.",
  },
];

export default awards;
