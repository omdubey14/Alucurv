export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  categoryNumber: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  specs: ProductSpec[];
  features: string[];
  applications: string[];
  tag: string;
}

export interface GlassSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  features: string[];
  thicknessOptions: string;
  applications: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Office" | "Villa" | "Architectural";
  location: string;
  year: string;
  area: string;
  solutionUsed: string;
  imageUrl: string;
  galleryImages: string[];
  description: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  visualTag: string;
}

export interface WhyPillar {
  id: string;
  title: string;
  headline: string;
  description: string;
  technicalHighlight: string;
  iconName: string;
  stats: string;
}

export interface CallbackFormData {
  name: string;
  phone: string;
  projectType: string;
  city: string;
  message: string;
}
