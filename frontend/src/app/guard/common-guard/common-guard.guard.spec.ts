import { TestBed, async, inject } from '@angular/core/testing';

import { CommonGuardGuard } from './common-guard.guard';

describe('CommonGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonGuardGuard]
    });
  });

  it('should ...', inject([CommonGuardGuard], (guard: CommonGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
