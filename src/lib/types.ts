export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  challenge: string;
  solution: string[];
  results: string[];
  tools: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  image?: string;
}

export interface Skill {
  title: string;
  description: string;
  icon?: string;
}
