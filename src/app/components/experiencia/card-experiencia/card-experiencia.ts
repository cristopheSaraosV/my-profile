import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ExperienciaI } from '../interface/experiencia.interface';



@Component({
  selector: 'app-card-experiencia',
  imports: [MatCardModule],
  templateUrl: './card-experiencia.html',
  styleUrl: './card-experiencia.scss'
})
export class CardExperiencia {

  experiencia = input.required<ExperienciaI>()
  clickDetail = output<ExperienciaI>();

}
