export interface Education {
    title: string;
    subTitle?: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "Bachellor in Computer Science Systems Engineering",
        subTitle: 'Graduated with Academic Excellence',
        startDate: "2021-02-01",
        endDate: "2025-06-30",
        school: "Universidad Privada Boliviana",
        location: "Bolivia",
        description: "Comprehensive academic formation in computer science and systems engineering, with strong emphasis on software development, algorithms, databases, and system design. Gained practical experience through academic projects using modern technologies such as React.js, Angular, Node.js, among others.",
        currentUni: false,
    },
];

export default education;
