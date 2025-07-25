import { Component, computed, effect, inject, signal } from "@angular/core";
import { Skill } from "./interface/skill.interface";
import { toSignal } from "@angular/core/rxjs-interop";
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { SkillForm } from "./interface/skill-form.interace";
import { SkillService } from "../../../skill/service/skill-service";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule, MatError } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { SkillsDashboardService } from "../skills-dashboard-service/skills-dashboard-service";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-formulario-skill',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatError,
    MatIconModule,
  ],
  templateUrl: './formulario-skill.html',
  styleUrl: './formulario-skill.scss'
})
export class FormularioSkill {
  private fb = inject(NonNullableFormBuilder);
  private skillsService = inject(SkillService);
  private skillsDashboardService = inject(SkillsDashboardService);
  dialogRef = inject(MatDialogRef<SkillsDashboardService>);

  formSkill: FormGroup<SkillForm> = this.initialForm();

  tecnologiasDisponibles = this.skillsService.tecnologiasDisponibles;
  skillsSelected = this.skillsDashboardService.skillsSelected;

  actualizarFormulario = effect(() => {
    if(this.skillsSelected() !== undefined){
      const skill = this.skillsSelected();
      this.formSkill.patchValue({
        id: skill?.id,
        tecnologia: skill?.tecnologia,
        experiencia: skill?.experiencia
      });
    }
  }) 
    
   tecnologiaSeleccionada = toSignal(
    this.formSkill.controls.tecnologia.valueChanges,
    { initialValue: this.formSkill.controls.tecnologia.value }
  );

  canSubmit = computed(() => {
    return this.formSkill.valid && this.tecnologiaSeleccionada() !== 'defecto';
  });

  /** 🧠 Lista reactiva de skills ingresadas */
  readonly listadoSkillsUsuario = this.skillsDashboardService.listadoSkillsUsuario;

  /** ✅ Guardar skill nueva o actualizar existente */
  saveForm() {
    const raw = this.formSkill.getRawValue();
    const id = raw.id || crypto.randomUUID();

    const skill: Skill = { ...raw, id };

    this.listadoSkillsUsuario.update((lista) => {
      const idx = lista.findIndex(s => s.id === id);
      if (idx >= 0) {
        // Editar existente
        const nuevaLista = [...lista];
        nuevaLista[idx] = skill;
        return nuevaLista;
      } else {
        // Agregar nueva
        return [...lista, skill];
      }
    });

    this.formSkill.reset();
    this.formSkill.controls.tecnologia.setValue('defecto');
    this.formSkill.controls.experiencia.setValue(0);
    this.formSkill.markAsPristine();
    this.formSkill.markAsUntouched();
    this.closeDialog();
  }

  initialForm(): FormGroup<SkillForm> {
    return this.fb.group<SkillForm>({
      id: this.fb.control(''),
      tecnologia: this.fb.control('defecto', { validators: Validators.required }),
      experiencia: this.fb.control(0, { validators: [Validators.required, Validators.min(0)] }),
    });
  }

  getFormErrors(): Record<string, any> {
    const errores: Record<string, any> = {};
    Object.entries(this.formSkill.controls).forEach(([nombre, control]) => {
      if (control.invalid && control.errors) {
        errores[nombre] = control.errors;
      }
    });
    return errores;
  }

    closeDialog(){
    this.limpiarFormulario();
    this.formSkill.reset();
    this.dialogRef.close();
  }

  
  limpiarFormulario(): void {
    this.formSkill.reset();
    this.formSkill.markAsPristine();
    this.formSkill.markAsUntouched();
    this.formSkill.updateValueAndValidity()
  }
}
