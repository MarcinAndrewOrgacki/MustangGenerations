import { TestBed } from '@angular/core/testing';

import { MustangService } from './mustang.service';

describe('MustangService', () => {
  let service: MustangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MustangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
