export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
  features: string[];
  imageUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface Stats {
  projects: number;
  clients: number;
  uptime: string;
  support: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}