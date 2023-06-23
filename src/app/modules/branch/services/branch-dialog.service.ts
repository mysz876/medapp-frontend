import { Injectable } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { Observable } from 'rxjs';
import { IModal } from '../../shared/models/model.interface';
import { MatDialogConfig } from '@angular/material/dialog';
import { IBranch } from '../models/branch.interface';
import { BranchEditComponent } from '../pages/branch-edit/branch-edit.component';

@Injectable({
  providedIn: 'root'
})
export class BranchDialogService {

  constructor(
    private modal: ModalService,
  ) { }

  openConfirm(text: string): Observable<any> {
    const dataDialog: IModal = {
      title: 'Zatwierdź działanie',
      actionButtonText: 'Wykonaj',
      description: text,
    }
    return this.open(dataDialog)
  }

  openEdit(branch: IBranch): Observable<any> {
    const dataDialog: IModal = {
      title: 'Edycja oddziału',
      actionButtonText: 'Zapisz',
      component: BranchEditComponent,
      extraData: branch,
    }
    return this.open(dataDialog)
  }

  private open(data: IModal): Observable<any> {
    const configDialog = new MatDialogConfig()
    configDialog.data = data
    return this.modal.afterCloseModal(configDialog)
  }
}
