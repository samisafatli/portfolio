export interface SkillCategory {
  category: string
  skills: string[]
}

export const SKILLS_CONSTANTS = {
  sectionTitle: "Technologies & Skills",
  skillCategories: [
    {
      category: "Frontend",
      skills: ["React", "React Native", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Firebase", "GraphQL", "Python", "Golang"]
    },
    {
      category: "DevOps",
      skills: ["CI/CD", "Git", "Azure", "Split.io"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "DynamoDB"]
    },
    {
      category: "Languages",
      skills: ["Portuguese (Native)", "English (Fluent)", "Arabic (Fluent)"]
    }
  ] as SkillCategory[]
} as const
