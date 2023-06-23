import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private dialog: MatDialog,
  ) { }

  private openModal(config: MatDialogConfig): MatDialogRef<any> {
    return this.dialog.open(ModalComponent, config)
  }

  afterCloseModal(config: MatDialogConfig): Observable<any>{
    config.disableClose = true
    return this.openModal(config).afterClosed()
  }
}
