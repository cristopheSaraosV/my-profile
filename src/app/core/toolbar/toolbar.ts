import { Component, DOCUMENT, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from '../../services/sidenav-service';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {

  isDarkMode = signal<boolean>(true);

  private _document = inject(DOCUMENT);
  private sidenavService = inject(SidenavService);

  constructor(){
    effect(()=>{
      // this._document.body.classList.toggle('dark-mode', this.isDarkMode())
    })
  }


  changeMode(mode:boolean){
    this.isDarkMode.set(mode)
  }

  openMenu() {
    this.sidenavService.toggle();
  }
}
