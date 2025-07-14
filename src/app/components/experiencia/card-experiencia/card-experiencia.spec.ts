import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExperiencia } from './card-experiencia';

describe('CardExperiencia', () => {
  let component: CardExperiencia;
  let fixture: ComponentFixture<CardExperiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExperiencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExperiencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
