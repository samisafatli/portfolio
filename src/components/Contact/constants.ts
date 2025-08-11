export interface ContactLink {
  href: string
  icon: string
  text: string
  external?: boolean
}

export const CONTACT_CONSTANTS = {
  sectionTitle: "Get In Touch",
  heading: "Let's Connect",
  description: "I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out if you'd like to discuss how we can work together.",
  links: [
    {
      href: "mailto:samisafatli@live.com",
      icon: "email",
      text: "samisafatli@live.com"
    },
    {
      href: "tel:+5521995076892",
      icon: "phone",
      text: "+55 21 99507-6892"
    },
    {
      href: "https://www.linkedin.com/in/safatlisami/",
      icon: "linkedin",
      text: "LinkedIn",
      external: true
    },
    {
      href: "https://github.com/samisafatli",
      icon: "github",
      text: "GitHub",
      external: true
    },
    {
      href: "#",
      icon: "location",
      text: "From Brazil, to the world"
    }
  ] as ContactLink[]
} as const
