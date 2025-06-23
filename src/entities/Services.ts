import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration: string;
  experience: string;
  color: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicesHeroProps {
  title: string;
  subtitle: string;
  badgeText: string;
  ctaText: string;
  ctaLink: string;
}

export interface ServicesGridProps {
  services: Service[];
}

export interface ServiceCardProps {
  service: Service;
}

export interface IndustriesSectionProps {
  industries: Industry[];
  title: string;
  subtitle: string;
  badgeText: string;
}

export interface IndustryCardProps {
  industry: Industry;
}

export interface ProcessSectionProps {
  steps: ProcessStep[];
  title: string;
  badgeText: string;
}

export interface ProcessStepCardProps {
  step: ProcessStep;
}

export interface ServicesCTAProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
} 