import React from 'react';

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  profileImage?: string;
  resume?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'development' | 'design' | 'tools' | 'soft' | 'language';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'design' | 'other' | 'ai';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  showCaseStudyButton?: boolean;
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  achievements?: string[];
  location: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  department?: string;
  type?: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  achievements?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'certification' | 'publication' | 'other' | 'achievement' | 'project';
  issuer?: string;
  organization?: string;
  url?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
  preferredContact: 'email' | 'phone' | 'linkedin';
}

export interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured' | 'compact';
  showCategory?: boolean;
  onClick?: () => void;
}

export interface SkillBadgeProps {
  skill: Skill;
  showLevel?: boolean;
  variant?: 'default' | 'compact';
}

export interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface ProjectFilters {
  category?: string;
  technology?: string;
  status?: string;
  featured?: boolean;
}

export interface SearchFilters {
  query: string;
  category: string;
  sortBy: 'date' | 'title' | 'relevance';
  sortOrder: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  skills: Skill[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
  achievements: Achievement[];
  contactInfo: ContactInfo;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export type ViewMode = 'grid' | 'list';
export type SortDirection = 'asc' | 'desc';