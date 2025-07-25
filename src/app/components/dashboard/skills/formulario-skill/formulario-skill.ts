import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SkillsDashboardService } from '../skills-dashboard-service/skills-dashboard-service';
import { SkillDashboard } from './interface/skill-dashboard.interface';
import { SkillForm } from './interface/skill-form.interace';

@Component({
  selector: 'app-formulario-skill',
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
  private skillsDashboardService = inject(SkillsDashboardService);
  private dialogRef = inject(MatDialogRef<SkillsDashboardService>);
  private fb = inject(NonNullableFormBuilder);

  formSkill: FormGroup<SkillForm> = this.initialForm();

  readonly listadoSkillsUsuario = this.skillsDashboardService.listadoSkillsUsuario;
  skillsSelected = this.skillsDashboardService.skillsSelected;

  actualizarFormulario = effect(() => {
    const skill = this.skillsSelected();
    if (skill !== undefined) {
      this.formSkill.patchValue(skill);
    }
  });

  tecnologiaSeleccionada = toSignal(
    this.formSkill.controls.nombre.valueChanges,
    { initialValue: this.formSkill.controls.nombre.value }
  );

  saveForm() {
    const raw = this.formSkill.getRawValue();
    const id = raw.id || crypto.randomUUID();

    const skill = { ...raw, id };

    this.listadoSkillsUsuario.update((lista) => {
      const idx = lista.findIndex(s => s.id === id);
      if (idx >= 0) {
        const nuevaLista = [...lista];
        nuevaLista[idx] = skill as SkillDashboard;
        return nuevaLista;
      } else {
        return [...lista, skill] as SkillDashboard[];
      }
    });

    this.closeDialog();
  }

  initialForm(): FormGroup<SkillForm> {
    return this.fb.group<SkillForm>({
      id: this.fb.control(''),
      nombre: this.fb.control('', { validators: Validators.required }),
      categoria: this.fb.control('Front-End', { validators: Validators.required }),
      subcategoria: this.fb.control(null),
      icon: this.fb.control('code'),
      tags: this.fb.control<string[]>([]),
      experiencia: this.fb.control(0, { validators: [Validators.required, Validators.min(0)] }),
      nivel: this.fb.control('Intermedio'),
      vigente: this.fb.control(true),
    });
  }

  onTagsInput(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    const tags = input.value.split(',').map(t => t.trim()).filter(Boolean);
    this.formSkill.controls.tags.setValue(tags);
  }

  closeDialog() {
    this.limpiarFormulario();
    this.dialogRef.close();
  }

  limpiarFormulario(): void {
    this.formSkill.reset();
    this.formSkill.markAsPristine();
    this.formSkill.markAsUntouched();
    this.formSkill.updateValueAndValidity();
  }
}
