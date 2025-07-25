import { Injectable, signal } from '@angular/core';
import { SkillDashboard } from '../formulario-skill/interface/skill-dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsDashboardService {
  readonly listadoSkillsUsuario = signal<SkillDashboard[]>([]);
  readonly skillsSelected = signal<SkillDashboard | undefined>(undefined);

  constructor() { }
}
