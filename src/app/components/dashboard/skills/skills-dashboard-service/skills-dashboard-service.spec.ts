import { TestBed } from '@angular/core/testing';

import { SkillsDashboardService } from './skills-dashboard-service';

describe('SkillsDashboardService', () => {
  let service: SkillsDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
