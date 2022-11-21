import { TestBed } from '@angular/core/testing';

import { FacadeMainService } from './facade-main.service';

describe('FacadeMainService', () => {
  let service: FacadeMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
