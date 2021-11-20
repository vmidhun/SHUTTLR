import { TestBed } from '@angular/core/testing';

import { SinglesmatchService } from './singlesmatch.service';

describe('SinglesmatchService', () => {
  let service: SinglesmatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglesmatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
