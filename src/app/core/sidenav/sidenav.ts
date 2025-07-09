import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { Contacto } from '../../pages/contacto/contacto';
import { Experiencia } from '../../pages/experiencia/experiencia';
import { Home } from '../../pages/home/home';
import { Skills } from '../../pages/skills/skills';
import { SobreMi } from '../../pages/sobre-mi/sobre-mi';
import { SidenavService } from '../../services/sidenav-service';
import { CardSkill } from '../../components/skill/card-skill/card-skill';

@Component({
  selector: 'app-sidenav',
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
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss']
})
export class Sidenav {
  showFiller = false;

  @ViewChild('drawer', { read: MatSidenav, static: false })
  set drawer(drawer: MatSidenav) {
    this.sidenavService.setDrawer(drawer);
  }

  constructor(private sidenavService: SidenavService) { }

  toggleFiller() {
    this.showFiller = !this.showFiller;
  }
}
