import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../shared/services/modal.service';
import { IModal } from '../../shared/models/model.interface';
import { SpecializationEditComponent } from '../pages/specialization-edit/specialization-edit.component';
import { ISpecialization } from '../models/specialization.interface';
import { MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SpecializationDialogService {

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

  openEdit(specialization: ISpecialization): Observable<any> {
    const dataDialog: IModal = {
      title: 'Edycja oddziału',
      actionButtonText: 'Zapisz',
      component: SpecializationEditComponent,
      extraData: specialization,
    }
    return this.open(dataDialog)
  }

  private open(data: IModal): Observable<any> {
    const configDialog = new MatDialogConfig()
    configDialog.data = data
    return this.modal.afterCloseModal(configDialog)
  }
}
