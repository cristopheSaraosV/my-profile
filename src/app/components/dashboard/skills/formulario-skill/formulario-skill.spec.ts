import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSkill } from './formulario-skill';

describe('FormularioSkill', () => {
  let component: FormularioSkill;
  let fixture: ComponentFixture<FormularioSkill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSkill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSkill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
