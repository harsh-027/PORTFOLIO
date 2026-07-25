export interface Metric {
  label: string;
  value: string;
  highlightDot?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
  link: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  bullets: string[];
}

export interface ToolItem {
  name: string;
  description: string;
  iconSvg: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  reviewerName: string;
  reviewerRole: string;
  reviewerAvatar: string;
}

export interface AwardItem {
  title: string;
  awarder: string;
  year: string;
  logo: string;
  whiteLogo?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  iconType: 'pen' | 'wireframe' | 'knight' | 'ribbon';
}

export interface PricingPlan {
  id: 'standard' | 'premium';
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  email: string;
  phone: string;
  message: string;
  budget: string;
}
