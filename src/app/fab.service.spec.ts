import { TestBed, inject } from '@angular/core/testing';

import { FabService } from './fab.service';

describe('FabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FabService]
    });
  });

  it('should be created', inject([FabService], (service: FabService) => {
    expect(service).toBeTruthy();
  }));
});
