
export type Language = 'en' | 'hi';

export enum SectionId {
  Home = 'home',
  About = 'about',
  Events = 'events',
  Exhibit = 'exhibit',
  Innovation = 'innovation',
  Finance = 'finance',
  Digital = 'digital',
  Gallery = 'gallery',
  Contact = 'contact'
}

export interface NavLink {
  id: SectionId;
  label: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
}

export interface City {
  name: string;
  country: string;
  x: number;
  y: number;
}
