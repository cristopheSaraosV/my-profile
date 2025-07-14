import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkill } from './card-skill';

describe('CardSkill', () => {
  let component: CardSkill;
  let fixture: ComponentFixture<CardSkill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSkill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSkill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
