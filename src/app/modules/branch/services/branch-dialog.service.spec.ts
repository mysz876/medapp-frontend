import { TestBed } from '@angular/core/testing';

import { BranchDialogService } from './branch-dialog.service';

describe('BranchDialogService', () => {
  let service: BranchDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
