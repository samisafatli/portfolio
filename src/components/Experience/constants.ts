export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
  current?: boolean;
}

export const EXPERIENCE_CONSTANTS = {
  sectionTitle: "Work Experience",
  experiences: [
    {
      company: "Zé Delivery",
      position: "Software Engineer",
      period: "January 2025 - Present",
      current: true,
      description: [
        "Developed and maintained key post-purchase features to improve the user journey after checkout",
        "Built delivery tracking, notifications, and customer support flows",
        "Collaborated with cross-functional teams to increase customer satisfaction through data-driven UX improvements",
        "Applied engineering best practices including code reviews, CI/CD pipelines, and automated testing",
      ],
    },
    {
      company: "Yduqs",
      position: "Software Engineer",
      period: "June 2023 - January 2025",
      description: [
        "Owned the full student journey within the largest university app in Brazil",
        "Developed critical mobile flows using React Native and Firebase",
        "Integrated backend logic and handled real-time data operations across services",
        "Worked in Agile squads, actively participating in sprint planning and code reviews",
      ],
    },
    {
      company: "PayPal",
      position: "Software Engineer",
      period: "September 2021 - March 2023",
      description: [
        "Contributed to global features like PayPal.Me and Crowdfunding",
        "Ensured stable rollout during the app migration phase",
        "Refactored frontend components and improved performance across shared React-based systems",
        "Maintained automated test coverage using Cypress",
      ],
    },
    {
      company: "Globo",
      position: "Software Engineer Jr",
      period: "August 2019 - August 2021",
      description: [
        "Developed internal systems for editorial content creation, including a CMS used by Globo's content teams",
        "Built reusable and responsive UI components in React for critical company platforms",
        "Delivered interactive features like real-time voting and commenting systems",
        "Contributed to content distribution systems using Node.js, Golang, and Python",
      ],
    },
    {
      company: "HarryCode & Ipiranga",
      position: "Programming Instructor & Intern",
      period: "2017 - 2019",
      description: [
        "Taught game programming fundamentals and logic building",
        "Completed software development internship at Ipiranga",
      ],
    },
  ] as ExperienceItem[],
} as const;
