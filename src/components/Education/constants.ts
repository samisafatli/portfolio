export interface EducationItem {
  degree: string
  institution: string
  period: string
}

export const EDUCATION_CONSTANTS = {
  sectionTitle: "Education",
  education: [
    {
      degree: "Postgraduate - Project Management",
      institution: "University Estácio de Sá",
      period: "2024"
    },
    {
      degree: "Bachelor - Information Systems",
      institution: "University of Veiga de Almeida",
      period: "2018 - 2022"
    }
  ] as EducationItem[]
} as const
