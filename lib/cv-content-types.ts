export interface CVContent {
  header: HeaderContent
  sidebar: SidebarContent
  about: AboutContent
  education: EducationContent
  skills: SkillsContent
  experience: ExperienceContent
  projects: ProjectsContent
  footer: FooterContent
}

export interface HeaderContent {
  name: string
  title: string
  tagline: string
}

export interface SidebarContent {
  brand: string
  navItems: NavItem[]
  contact: ContactContent
}

export interface NavItem {
  id: string
  label: string
}

export interface ContactContent {
  location: string
  phone: string
  email: string
  linkedin: string
  github: string
}

export interface AboutContent {
  title: string
  paragraphs: string[]
  metrics: MetricContent[]
}

export interface MetricContent {
  label: string
  value: string
}

export interface EducationContent {
  title: string
  items: EducationItem[]
}

export interface EducationItem {
  school: string
  major: string
  degree: string
  period: string
  gpa: string
  language: string
}

export interface SkillsContent {
  title: string
  categories: SkillCategory[]
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface ExperienceContent {
  title: string
  items: ExperienceItem[]
}

export interface ExperienceItem {
  position: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export interface ProjectsContent {
  title: string
  items: ProjectItem[]
}

export interface ProjectItem {
  title: string
  period: string
  description: string
  technologies: string[]
  outcome: string
  role: string
  teamSize: string
  github: string
}

export interface FooterContent {
  owner: string
  text: string
  year: number
}
