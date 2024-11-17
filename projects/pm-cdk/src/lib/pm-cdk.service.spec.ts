import { TestBed } from '@angular/core/testing';

import { PmCdkService } from './pm-cdk.service';

describe('PmCdkService', () => {
  let service: PmCdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmCdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
