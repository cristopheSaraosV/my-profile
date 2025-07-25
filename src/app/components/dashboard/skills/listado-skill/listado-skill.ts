import { ChangeDetectorRef, Component, computed, effect, inject, signal, viewChild } from '@angular/core';
import { SkillsDashboardService } from '../skills-dashboard-service/skills-dashboard-service';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../../skill/service/skill-service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Skill } from '../formulario-skill/interface/skill.interface';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FormularioSkill } from '../formulario-skill/formulario-skill';
import { LookupPipe } from '../../../../utils/lookup-pipe';

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

  skills = this.skillService.skills
  listadoSkillsUsuario = this.skillsDashboardService.listadoSkillsUsuario;

  private cdr = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);

  addSkill() {
    this.dialog.open(FormularioSkill, {
      width: '500px',
      height: '350px',
      minHeight: '350px',
      disableClose: true,
    });
  }

  dataSourceMatTable = new MatTableDataSource<Skill>([]);
  paginator = viewChild<MatPaginator>(MatPaginator);

  displayedColumns = signal<string[]>(['tecnologia', 'experiencia', 'acciones']);

  editarSkill(skill: Skill) {
    this.skillsDashboardService.skillsSelected.set(skill);
    this.addSkill();
  }

  eliminarSkill(skill: Skill) {
    this.skillsDashboardService.listadoSkillsUsuario.update(lista =>
      lista.filter(s => s.id !== skill.id)
    );
  }

  data = computed(() => this.dataSourceMatTable);

  readonly #update = effect(() => {
    this.dataSourceMatTable.data = this.listadoSkillsUsuario();
    this.dataSourceMatTable.paginator = this.paginator()!;
  });

}
