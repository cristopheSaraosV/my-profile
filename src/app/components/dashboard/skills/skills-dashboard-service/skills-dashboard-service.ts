import { Injectable, signal } from '@angular/core';
import { Skill } from '../formulario-skill/interface/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsDashboardService {
  readonly listadoSkillsUsuario = signal<Skill[]>([]);
  readonly skillsSelected = signal<Skill | undefined>(undefined);

  constructor() { }
}
