import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LookupPipe } from '../../../../utils/lookup-pipe';
import { SkillService } from '../../../skill/service/skill-service';
import { FormularioSkill } from '../formulario-skill/formulario-skill';
import { SkillDashboard } from '../formulario-skill/interface/skill-dashboard.interface';
import { SkillsDashboardService } from '../skills-dashboard-service/skills-dashboard-service';

@Component({
  selector: 'app-listado-skill',
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatButtonModule,
    LookupPipe
  ],
  templateUrl: './listado-skill.html',
  styleUrl: './listado-skill.scss'
})
export class ListadoSkill {

  private skillsDashboardService = inject(SkillsDashboardService);
  private skillService = inject(SkillService);
  private dialog = inject(MatDialog);

  listadoSkillsUsuario = this.skillsDashboardService.listadoSkillsUsuario;
  skills = this.skillService.skills
 
  dataSourceMatTable = new MatTableDataSource<SkillDashboard>([]);
  paginator = viewChild<MatPaginator>(MatPaginator);
  data = computed(() => this.dataSourceMatTable);
  readonly #update = effect(() => {
    this.dataSourceMatTable.data = this.listadoSkillsUsuario();
    this.dataSourceMatTable.paginator = this.paginator()!;
  });

  displayedColumns = signal<string[]>([
    'nombre',
    'categoria',
    'nivel',
    'experiencia',
    'vigente',
    'acciones'
  ]);


  addSkill() {
    this.dialog.open(FormularioSkill, {
      width: '800px',
      height: '520px',
      minHeight: '520px',
      disableClose: true,
    });
  }

  editarSkill(skill: SkillDashboard) {
    this.skillsDashboardService.skillsSelected.set(skill);
    this.addSkill();
  }

  eliminarSkill(skill: SkillDashboard) {
    this.skillsDashboardService.listadoSkillsUsuario.update(lista =>
      lista.filter(s => s.id !== skill.id)
    );
  }

}
