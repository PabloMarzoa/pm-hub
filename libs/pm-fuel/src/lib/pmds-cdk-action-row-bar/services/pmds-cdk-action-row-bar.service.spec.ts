////////Angular imports
import { TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkActionRowBarService } from './pmds-cdk-action-row-bar.service';

describe('ActionRowBarService', () => {
  let service: PmdsCdkActionRowBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmdsCdkActionRowBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});