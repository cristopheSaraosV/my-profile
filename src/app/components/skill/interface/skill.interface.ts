export interface Skill {
  id: number;
  nombre: string;
  icon: string;
  category: 'Front-End' | 'Back-End' | 'Other';
  tags: string[];        
}