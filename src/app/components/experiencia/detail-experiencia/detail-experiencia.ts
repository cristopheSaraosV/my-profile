import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ExperienciaI } from '../interface/experiencia.interface';

@Component({
  selector: 'app-detail-experiencia',
  imports: [CommonModule,MatCardModule,MatChipsModule,MatDivider,MatListModule],
  templateUrl: './detail-experiencia.html',
  styleUrl: './detail-experiencia.scss'
})
export class DetailExperiencia {
  private readonly _raw = inject(MAT_DIALOG_DATA) as ExperienciaI;
  readonly dialogRef = inject(MatDialogRef<DetailExperiencia>);

  readonly experiencia = signal<ExperienciaI>(this._raw);
  readonly tecnologiaSelected = signal<string>('')

  readonly techDescriptions: Record<string,string> = {
    ANGULAR:   'Framework de Google para SPAs basado en TypeScript.',
    RXJS:      'Librería para programación reactiva y manejo de streams en JS.',
    HTML5:     'Última versión del lenguaje de marcado para estructurar páginas web.',
    CSS3:      'Especificación de estilos para dar diseño y maquetación en la web.',
    BOOTSTRAP: 'Framework CSS responsivo basado en componentes y utilidades.',
    MATERIAL:  'Conjunto de componentes UI siguiendo las guías de Material Design.',
    NEST:      'Framework backend sobre Node.js/TypeScript para arquitecturas modulares.',
    TYPEORM:   'ORM para TypeScript y JavaScript que trabaja con múltiples bases de datos.',
    JENKINS:   'Servidor de integración continua y entrega continua (CI/CD).',
    JIRA:      'Herramienta de Atlassian para gestión de proyectos y seguimiento de incidencias.',
  };

    readonly descripcionTecnologia = computed(() => {
    const tech = this.tecnologiaSelected();
    return tech
      ? this.techDescriptions[tech] ?? 'Descripción no disponible'
      : 'Selecciona una tecnología para ver su descripción';
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectTecnologia(tecnologia: string){
    this.tecnologiaSelected.set(tecnologia);
  }
}
