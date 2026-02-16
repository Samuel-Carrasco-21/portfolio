export interface Extracurricular {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  responsibilities: string[];
  currentRole: boolean;
}

const extracurricular: Extracurricular[] = [
  {
    title: "React Native Class Assistant",
    organization: "Universidad Privada Boliviana",
    startDate: "2024-07-01",
    location: "La Paz, Bolivia",
    description: "Assisted in teaching mobile development concepts in a React Native course.",
    responsibilities: [
      "Provided examples on JavaScript paradigms.",
      "Explained React Hooks and their practical applications.",
      "Demonstrated state management using Redux, useReducer, and Zustand.",
      "Guided students in form handling using react-hook-form and Formik.",
      "Showcased styling techniques using Native Wind and Gluestack UI.",
    ],
    currentRole: false,
  },
  {
    title: "Front End Developer (React.js)",
    organization: "Universidad Privada Boliviana",
    startDate: "2023-03-01",
    endDate: "2025-06-30",
    location: "La Paz, Bolivia",
    description: "Contributed as a volunteer frontend developer for a student-focused web application.",
    responsibilities: [
      "Collaborated in developing a web app for lunch reservations and student discussions.",
      "Utilized technologies such as Next.js, React Hooks, Tailwind CSS, Git, GitHub, and Firebase.",
    ],
    currentRole: false,
  },
  {
    title: "NASA International Space Apps Challenge La Paz Organizer",
    organization: "Space Apps Challenge",
    startDate: "2023-08-01",
    endDate: "2023-10-31",
    location: "La Paz, Bolivia",
    description: "Served as an event organizer for the NASA International Space Apps Challenge in La Paz.",
    responsibilities: [
      "Assisted in event promotion in collaboration with the Marketing team.",
      "Raised awareness among youth and tech enthusiasts.",
      "Encouraged the development of impactful projects for society and the future.",
    ],
    currentRole: false,
  },
  {
    title: "Relational Database Class Assistant",
    organization: "Universidad Privada Boliviana",
    startDate: "2023-02-01",
    endDate: "2023-03-31",
    location: "La Paz, Bolivia",
    description: "Supported students as a teaching assistant in a relational databases course.",
    responsibilities: [
      "Utilized platforms like DataLemur.com to improve student understanding.",
      "Answered student inquiries to clarify key course concepts.",
      "Provided support on MySQL database projects, ensuring successful completion.",
    ],
    currentRole: false,
  },
];

export default extracurricular;
