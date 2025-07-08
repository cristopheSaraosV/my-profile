import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

  namePage = signal('Inicio')

  profile = signal({
    name: 'Cristopher Saraos /> ',
    detail: `Desarrollador web Full Stack con experiencia en Angular, NestJS y Oracle. Especialista en la creación de
            aplicaciones robustas utilizando Angular Material. Proactivo, orientado a la mejora continua y a la entrega
            de soluciones eficientes.`,
  })
}
