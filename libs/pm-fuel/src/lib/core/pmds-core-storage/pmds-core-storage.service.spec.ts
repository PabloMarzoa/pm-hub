import { TestBed } from '@angular/core/testing';

import { PmdsCoreStorageService } from './pmds-core-storage.service';

describe('PmdsCoreStorageService', () => {
  let service: PmdsCoreStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmdsCoreStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
