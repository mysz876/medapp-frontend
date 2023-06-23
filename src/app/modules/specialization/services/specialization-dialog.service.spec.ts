import { TestBed } from '@angular/core/testing';

import { SpecializationDialogService } from './specialization-dialog.service';

describe('SpecializationDialogService', () => {
  let service: SpecializationDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecializationDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
