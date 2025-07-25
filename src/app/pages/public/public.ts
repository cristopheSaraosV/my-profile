import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { Contacto } from '../contacto/contacto';
import { Experiencia } from './experiencia/experiencia';
import { Home } from './home/home';
import { Skills } from './skills/skills';
import { SobreMi } from './sobre-mi/sobre-mi';

@Component({
  selector: 'app-public',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule, 
    RouterModule,
    MatDivider,
    Home,
    SobreMi,
    Experiencia,
    Skills,
    Contacto,
  ],
  templateUrl: './public.html',
  styleUrl: './public.scss'
})
export class Public {

}
