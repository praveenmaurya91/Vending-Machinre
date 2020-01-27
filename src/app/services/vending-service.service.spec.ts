import { TestBed } from '@angular/core/testing';

import { VendingService } from './vending-service.service';

describe('VendingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendingService = TestBed.get(VendingService);
    expect(service).toBeTruthy();
  });
});
