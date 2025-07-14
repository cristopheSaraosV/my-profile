import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExperiencia } from './detail-experiencia';

describe('DetailExperiencia', () => {
  let component: DetailExperiencia;
  let fixture: ComponentFixture<DetailExperiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailExperiencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailExperiencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
