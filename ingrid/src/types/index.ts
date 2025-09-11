// This file exports TypeScript types and interfaces used in the application, ensuring type safety.

export interface Dessert {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  detailsUrl: string;
}

export interface QuickIntroProps {
  title: string;
  description: string;
}

export interface CTASectionProps {
  heading: string;
  subheading: string;
  orderButtonText: string;
  menuButtonText: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterProps {
  contactInfo: string;
  links: FooterLink[];
}