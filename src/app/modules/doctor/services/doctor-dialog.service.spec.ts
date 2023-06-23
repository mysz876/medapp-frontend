import { TestBed } from '@angular/core/testing';

import { DoctorDialogService } from './doctor-dialog.service';

describe('DoctorDialogService', () => {
  let service: DoctorDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
