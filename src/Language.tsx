import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Language = 'en' | 'pt';
const pt: Record<string, string> = {
  'Work experience': 'Experiência', 'Work Experience': 'Experiência profissional', 'Technologies': 'Tecnologias', 'Studies': 'Formação', 'About & Contact': 'Sobre e contato',
  'Work': 'Experiência', 'About': 'Sobre', 'Toolkit': 'Tecnologias', 'Say hello ↗': 'Vamos conversar ↗', 'Skip to content': 'Ir para o conteúdo', 'Main navigation': 'Navegação principal',
  'SOFTWARE ENGINEER · BRAZIL': 'ENGENHEIRO DE SOFTWARE · BRASIL', 'Thoughtful code.': 'Tecnologia com propósito.', 'Real-world': 'Impacto no', 'impact.': 'mundo real.',
  "I build web & mobile experiences that make everyday life a little better.": 'Desenvolvo sites e aplicativos para facilitar a vida de quem usa.',
  "Hi, I'm": 'Oi, meu nome é', '7+ years using technology as a tool to solve real-world problems.': 'Uso a tecnologia para resolver problemas reais há mais de 7 anos.',
  'Explore my work ↓': 'Conheça meu trabalho ↓', "Let's talk ↗": 'Vamos conversar ↗', 'Currently building at Zé Delivery': 'Hoje, faço parte do time do Zé Delivery',
  'A FEW STOPS ON MY JOURNEY': 'EMPRESAS POR ONDE PASSEI', 'Keep exploring ↓': 'Veja minha experiência ↓', 'Back to top ↑': 'Voltar ao topo ↑', 'Built with care. One pixel at a time.': 'Feito com cuidado. Um pixel de cada vez.',
  'Explore my background': 'Conheça minha trajetória', 'Choose a company': 'Escolha uma empresa', 'About Me': 'Sobre mim', 'Contact links': 'Links de contato', "Have a project in mind? Let's talk.": 'Quer trocar uma ideia ou falar sobre um projeto? Me chama.',
  "I'm a Software Engineer with 7+ years of experience building web and mobile applications. I use technology to solve real-world problems and create thoughtful, reliable experiences.": 'Sou engenheiro de software e trabalho com desenvolvimento web e mobile há mais de 7 anos. Gosto de entender o problema por trás de cada projeto e criar soluções simples de usar, confiáveis e que façam diferença no dia a dia.',
  "Throughout my career, I've contributed to products used by millions at PayPal, Globo, Yduqs, and Zé Delivery. My work spans web and mobile development, with a focus on usability, performance, and maintainable engineering.": 'Já passei por empresas como PayPal, Globo, Yduqs e Zé Delivery, contribuindo para produtos usados por milhões de pessoas. Meu foco é unir uma boa experiência de uso, desempenho e código que o time consiga manter e evoluir.',
  'Technologies & Skills': 'Tecnologias que uso', 'Databases': 'Bancos de dados', 'Languages': 'Idiomas', 'Portuguese (Native)': 'Português (nativo)', 'English (Fluent)': 'Inglês (fluente)', 'Arabic (Fluent)': 'Árabe (fluente)',
  'Education': 'Formação acadêmica', 'Postgraduate - Project Management': 'Pós-graduação em Gestão de Projetos', 'Bachelor - Information Systems': 'Bacharelado em Sistemas de Informação', 'University Estácio de Sá': 'Universidade Estácio de Sá', 'University of Veiga de Almeida': 'Universidade Veiga de Almeida',
  'Software Engineer': 'Engenheiro de software', 'Software Engineer Jr': 'Engenheiro de software júnior', 'Game Development Instructor': 'Instrutor de desenvolvimento de jogos',
  'January 2025 - Present': 'Jan. de 2025 — atual', 'June 2023 - January 2025': 'Jun. de 2023 — jan. de 2025', 'September 2021 - March 2023': 'Set. de 2021 — mar. de 2023', 'August 2019 - August 2021': 'Ago. de 2019 — ago. de 2021',
  'Developed and maintained key post-purchase features to improve the user journey after checkout': 'Desenvolvi e mantive funcionalidades para tornar mais simples a experiência do cliente depois da compra',
  'Built delivery tracking, notifications, and customer support flows': 'Criei funcionalidades de acompanhamento de entregas, notificações e atendimento ao cliente',
  'Collaborated with cross-functional teams to increase customer satisfaction through data-driven UX improvements': 'Trabalhei com diferentes áreas para melhorar a experiência e a satisfação dos clientes com base em dados',
  'Applied engineering best practices including code reviews, CI/CD pipelines, and automated testing': 'Contribuí com revisões de código, testes automatizados e automação de integração e entrega (CI/CD)',
  'Owned the full student journey within the largest university app in Brazil': 'Cuidei da experiência do aluno de ponta a ponta no maior aplicativo universitário do Brasil',
  'Developed critical mobile flows using React Native and Firebase': 'Desenvolvi funcionalidades centrais do aplicativo com React Native e Firebase',
  'Integrated backend logic and handled real-time data operations across services': 'Integrei serviços de backend e trabalhei com dados em tempo real',
  'Worked in Agile squads, actively participating in sprint planning and code reviews': 'Participei de equipes ágeis, do planejamento das sprints às revisões de código',
  'Contributed to global features like PayPal.Me and Crowdfunding': 'Contribuí para funcionalidades usadas globalmente, como PayPal.Me e ferramentas de financiamento coletivo',
  'Ensured stable rollout during the app migration phase': 'Ajudei a manter as entregas estáveis durante a migração do aplicativo',
  'Refactored frontend components and improved performance across shared React-based systems': 'Refatorei componentes e melhorei o desempenho de sistemas em React usados por diferentes equipes',
  'Maintained automated test coverage using Cypress': 'Mantive a cobertura de testes automatizados com Cypress',
  "Developed internal systems for editorial content creation, including a CMS used by Globo's content teams": 'Desenvolvi ferramentas para as equipes editoriais da Globo, incluindo um sistema de gestão de conteúdo (CMS)',
  'Built reusable and responsive UI components in React for critical company platforms': 'Criei componentes reutilizáveis e responsivos em React para plataformas importantes da empresa',
  'Delivered interactive features like real-time voting and commenting systems': 'Desenvolvi recursos interativos, como votações e comentários em tempo real',
  'Contributed to content distribution systems using Node.js, Golang, and Python': 'Contribuí para sistemas de distribuição de conteúdo com Node.js, Golang e Python',
  'Taught game programming fundamentals and logic building': 'Ensinei lógica de programação e os primeiros passos no desenvolvimento de jogos',
  'Pixel art of a cozy developer studio with computer, books, plants and a sunset': 'Pixel art de um escritório aconchegante com computador, livros, plantas e um pôr do sol',
  'Career journey: PayPal, Globo, YDUQS and Zé Delivery': 'Trajetória profissional: PayPal, Globo, YDUQS e Zé Delivery',
};
const LanguageContext = createContext({ language: 'en' as Language, setLanguage: (_language: Language) => {}, t: (text: string) => text });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem('portfolio-language') === 'pt' ? 'pt' : 'en'; } catch { return 'en'; }
  });
  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    try { localStorage.setItem('portfolio-language', language); } catch { /* Browsing without storage remains supported. */ }
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage, t: (text) => language === 'pt' ? pt[text] ?? text : text }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
