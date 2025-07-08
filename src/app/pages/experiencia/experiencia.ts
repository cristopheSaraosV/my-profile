import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experiencia',
  imports: [MatCardModule],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss'
})
export class Experiencia {

  experiencias = signal([
    {
      cargo: 'Desarrollador Full Stack',
      empresa: 'TRÉBOL-IT',
      periodo: 'Marzo 2024 - Actualidad',
      descripcion:
        'Especializado en Angular y NestJS. Desarrollo de interfaces eficientes, creación de APIs robustas y gestión de base de datos Oracle con PL/SQL y SP.',
    },
    {
      cargo: 'Desarrollador Front-End',
      empresa: 'Chattigo',
      periodo: 'Abril 2022 - Febrero 2024',
      descripcion:
        'Manejo de micro-fronts en Angular (v11+), comunicación entre ellos mediante WebSocket y Output, integración con librerías externas y servicios.',
    },
    {
      cargo: 'Analista Programador',
      empresa: 'SII-Group',
      periodo: 'Noviembre 2020 - Abril 2021',
      descripcion:
        'Desarrollo de extensión para Shopify que cotiza envíos con diferentes courier. Uso de React y Node.js para frontend y backend respectivamente.',
    },
  ])

}
