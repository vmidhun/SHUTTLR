import { TestBed } from '@angular/core/testing';

import { DoublesmatchService } from './doublesmatch.service';

describe('DoublesmatchService', () => {
  let service: DoublesmatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoublesmatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
