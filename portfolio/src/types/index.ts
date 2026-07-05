export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  points: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  program: string;
  period: string;
  honors: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
