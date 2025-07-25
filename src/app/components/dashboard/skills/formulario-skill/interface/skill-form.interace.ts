import { FormControl } from '@angular/forms';

export type SkillForm = {
  id: FormControl<string>;
  nombre: FormControl<string>;
  categoria: FormControl<'Front-End' | 'Back-End' | 'Base de Datos' | 'DevOps' | 'Testing' | 'Project Management' | 'Other'>;
  subcategoria: FormControl<string | null>;
  icon: FormControl<string>;
  tags: FormControl<string[]>;

  experiencia: FormControl<number>;
  nivel: FormControl<'Básico' | 'Intermedio' | 'Avanzado' | 'Experto'>;
  vigente: FormControl<boolean>;
};
