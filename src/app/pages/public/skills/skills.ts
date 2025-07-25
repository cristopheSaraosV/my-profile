import { Component, inject, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { CardSkill } from '../../../components/skill/card-skill/card-skill';
import { SkillService } from '../../../components/skill/service/skill-service';

@Component({
  selector: 'app-skills',
  imports: [MatChipsModule, CardSkill],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {

  skillService = inject(SkillService)

  frontEnd = this.skillService.frontEnd;
  backEnd = this.skillService.backEnd;
  others = this.skillService.others;



}
