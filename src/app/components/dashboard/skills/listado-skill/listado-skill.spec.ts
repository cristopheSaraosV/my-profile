import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSkill } from './listado-skill';

describe('ListadoSkill', () => {
  let component: ListadoSkill;
  let fixture: ComponentFixture<ListadoSkill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoSkill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoSkill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
