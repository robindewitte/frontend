import { TestBed } from '@angular/core/testing';

import { MotivatieService } from './motivatie.service';

describe('MotivatieService', () => {
  let service: MotivatieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotivatieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
