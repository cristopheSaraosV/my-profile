import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Skill } from '../interface/skill.interface';
import { SkillService } from '../service/skill-service';

@Component({
  selector: 'app-card-skill',
  imports: [MatIconModule],
  templateUrl: './card-skill.html',
  styleUrl: './card-skill.scss'
})
export class CardSkill {

  skillService = inject(SkillService);

  skills = this.skillService.skills

  skill = input.required<Skill>()
}
