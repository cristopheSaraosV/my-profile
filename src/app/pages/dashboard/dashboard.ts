import { Component, inject } from '@angular/core';
import { FormularioSkill } from '../../components/dashboard/skills/formulario-skill/formulario-skill';
import { ListadoSkill } from '../../components/dashboard/skills/listado-skill/listado-skill';
import { SkillsDashboardService } from '../../components/dashboard/skills/skills-dashboard-service/skills-dashboard-service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  imports: [ListadoSkill],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

 


}
