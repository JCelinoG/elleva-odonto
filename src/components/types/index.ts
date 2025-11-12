export interface SectionProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}