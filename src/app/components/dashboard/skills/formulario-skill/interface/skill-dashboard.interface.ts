export interface SkillDashboard {
  id: string;
  nombre: string;
  categoria: 'Front-End' | 'Back-End' | 'Base de Datos' | 'DevOps' | 'Testing' | 'Project Management' | 'Other';
  subcategoria?: string;
  icon: string;
  tags: string[];
  experiencia?: number;
  nivel?: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  vigente?: boolean;
}
