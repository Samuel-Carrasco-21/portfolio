/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
    {
        title: "Software QA Tester (Playwright)",
        startDate: "2025-08-01",
        company: "Shipedge",
        location: "United States (Remote)",
        description:
            "As a Software QA Engineer, I am responsible for conducting a variety of tests including smoke, regression, and stress testing, to ensure the proper functionality and reliability of the company’s products across both web and mobile platforms. In addition, I work with automation tools such as Playwright to enhance efficiency and strengthen the overall quality assurance process for our web applications.",
        goals: [
            "Conducted smoke, regression, and stress testing to ensure product reliability.",
            "Validated functionality and reliability across both web and mobile platforms.",
            "Implemented automation using Playwright to enhance QA process efficiency.",
        ],
        currentJob: true,
    },
    {
        title: "Full Stack Developer (Next.js, Express.js, Flutter)",
        startDate: "2024-09-01",
        company: "SLAN - Servicios Financieros",
        location: "La Paz, Bolivia",
        description:
            "Within this fintech company, as a frontend developer, I am responsible for enhancing the user experience on Prospera's main websites. My responsibilities range from bug fixing to the development of new features, utilizing React.js, Next.js, and TypeScript as core technologies. Additionally, as a backend developer, I actively participate in the creation and maintenance of endpoints for Prospera's various APIs, developed using Express.js, ensuring the reliable performance of server-side services. And in the mobile section, together with the development team, we use the Flutter tool, in order to provide the common user with Prospera services on their mobile device.",
        goals: [
            "Enhanced user experience on Prospera's main websites using React.js, Next.js, and TypeScript.",
            "Participated in the development and maintenance of RESTful APIs using Express.js.",
            "Contributed to the mobile development of Prospera's services using Flutter.",
        ],
        currentJob: true,
    },
    {
        title: "Front End & Mobile Developer (Angular, Ionic)",
        startDate: "2024-01-01",
        endDate: "2025-02-01",
        company: "Sommos",
        location: "Santa Cruz, Bolivia (Remote)",
        description:
            "I collaborated with the development team to design and implement a visually appealing and interactive user interface, leveraging Angular for web development and Ionic for native app development. I actively contributed to the team's workflow by using Git and GitHub as the primary tools for version control and project management.",
        goals: [
            "Developed responsive and dynamic interfaces using Angular and Ionic.",
            "Collaborated on UI/UX design improvements for mobile and web platforms.",
            "Managed source control and collaborated using Git and GitHub.",
        ],
        currentJob: false,
    },
];

export default workExperience;
