import { FormControl } from "@angular/forms";

export type SkillForm = {
  id: FormControl<string>;
  tecnologia: FormControl<string>;
  experiencia: FormControl<number>;
};