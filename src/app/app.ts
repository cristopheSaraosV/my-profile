import { Component } from '@angular/core';
import { Toolbar } from './core/toolbar/toolbar';
import { Sidenav } from './core/sidenav/sidenav';

@Component({
  selector: 'app-root',
  imports: [Toolbar,Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-profile';
}
