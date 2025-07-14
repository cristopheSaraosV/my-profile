import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({ providedIn: 'root' })
export class SidenavService {
  private drawer?: MatSidenav;

  setDrawer(drawer: MatSidenav) {
    this.drawer = drawer;
  }

  open() { this.drawer?.open(); }
  close() { this.drawer?.close(); }
  toggle() { this.drawer?.toggle(); }
}
