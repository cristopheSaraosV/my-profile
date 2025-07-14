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

  readonly techDescriptions: Record<string, string> = {
    ANGULAR: `Angular es un framework de código abierto de Google diseñado para construir aplicaciones web de una sola página (SPA) escalables. Utiliza TypeScript, ofrece inyección de dependencias, enrutamiento avanzado y un sistema de módulos que facilita la organización y el lazy loading.`,
    RXJS: `RxJS es una librería de JavaScript para programación reactiva basada en Observables. Permite manejar flujos de datos asíncronos y eventos mediante operadores de transformación, filtrado y combinación, mejorando la legibilidad y mantenibilidad del código.`,
    HTML5: `HTML5 es la quinta revisión del lenguaje de marcado para la web. Introdujo elementos semánticos como <header>, <footer> y <section>, APIs avanzadas como Canvas y Web Storage, y mejora la accesibilidad y estructura de las páginas.`,
    CSS3: `CSS3 añade módulos como Flexbox y Grid para crear layouts flexibles, media queries para diseño responsivo, animaciones, transiciones y variables nativas (custom properties) que facilitan el mantenimiento y la tematización.`,
    BOOTSTRAP: `Bootstrap es un framework CSS de código abierto que proporciona componentes listos para usar (botones, cards, modals) y un sistema de grillas responsivas. Incluye utilidades para márgenes, padding y tipografías, acelerando el desarrollo.`,
    MATERIAL: `Angular Material ofrece un conjunto de componentes UI basados en Material Design de Google. Incluye botones, inputs, diálogos y tablas con soporte nativo para accesibilidad, tematización y animaciones suaves.`,
    NEST: `NestJS es un framework backend para Node.js y TypeScript inspirado en Angular. Facilita la creación de arquitecturas modulares, inyección de dependencias, middleware y gateways, ideal para microservicios y APIs escalables.`,
    TYPEORM: `TypeORM es un ORM para TypeScript y JavaScript que soporta Active Record y Data Mapper. Permite definir entidades con decoradores, ejecutar migraciones, trabajar con repositorios y es compatible con múltiples bases de datos como PostgreSQL, MySQL y Oracle.`,
    JENKINS: `Jenkins es un servidor de automatización de código abierto para CI/CD. Permite definir pipelines declarativos, ejecutar pruebas, generar artefactos y desplegar aplicaciones automáticamente usando su amplia biblioteca de plugins.`,
    JIRA: `Jira es una herramienta de Atlassian para gestión de proyectos ágil. Facilita la planificación de sprints, seguimiento de incidencias, creación de tableros Kanban/Scrum y generación de informes de progreso y métricas.`
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
