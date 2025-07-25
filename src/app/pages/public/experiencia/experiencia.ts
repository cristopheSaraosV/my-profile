import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardExperiencia, } from '../../../components/experiencia/card-experiencia/card-experiencia';
import { DetailExperiencia } from '../../../components/experiencia/detail-experiencia/detail-experiencia';
import { ExperienciaI } from '../../../components/experiencia/interface/experiencia.interface';
@Component({
  selector: 'app-experiencia',
  imports: [CardExperiencia],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss'
})
export class Experiencia {

  private breakpoint = inject(BreakpointObserver);

  experiencias = signal<ExperienciaI[]>([
    {
      cargo: 'Desarrollador Full Stack',
      empresa: 'TRÉBOL-IT',
      periodo: 'Marzo 2024 - Actualidad',
      descripcion:
        'Especializado en Angular y NestJS. Desarrollo de interfaces eficientes, creación de APIs robustas y gestión de base de datos Oracle con PL/SQL y SP.',
      tecnologias: ['ANGULAR','RXJS','HTML5','CSS3','BOOTSTRAP','MATERIAL','NEST','TYPEORM','JENKIN','JIRA' ]
    },
    {
      cargo: 'Desarrollador Front-End',
      empresa: 'Chattigo',
      periodo: 'Abril 2022 - Febrero 2024',
      descripcion:
        'Manejo de micro-fronts en Angular (v11+), comunicación entre ellos mediante WebSocket y Output, integración con librerías externas y servicios.',
      tecnologias: ['Angular','RXJS','HTML5','CSS3','BOOTSTRAP','MATERIAL','JAVA (BASICO)','GO (BASICO)','DOCKER' ]
    },
    {
      cargo: 'Analista Programador',
      empresa: 'SII-Group',
      periodo: 'Noviembre 2020 - Abril 2021',
      descripcion:
        'Desarrollo de extensión para Shopify que cotiza envíos con diferentes courier. Uso de React y Node.js para frontend y backend respectivamente.',
      tecnologias: ['REACT', 'HTML5', 'CSS']
    },

  ])


  readonly dialog = inject(MatDialog);

  openDialog(experiencia: ExperienciaI): void {
    const isHandset = this.breakpoint.isMatched(Breakpoints.Handset);

    if (isHandset) {
      // opcional: mostrar un mensaje al usuario en vez de abrir el diálogo
      console.warn('El diálogo no está disponible en móvil');
      return;
    }

    this.dialog.open(DetailExperiencia, {
      data: experiencia,
      closeOnNavigation:true,
      width: '800px'
    });
  }
}
