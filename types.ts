
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface AIResponse {
  strategy: string;
  concepts: string[];
  diagnosis: string;
  roi_potential: string;
}
