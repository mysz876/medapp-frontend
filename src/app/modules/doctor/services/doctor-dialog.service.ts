import { Injectable } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { Observable } from 'rxjs';
import { IModal } from '../../shared/models/model.interface';
import { DoctorEditComponent } from '../pages/doctor-edit/doctor-edit.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { IDoctor } from '../models/doctor.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorDialogService {

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

  openEdit(doctor: IDoctor): Observable<any> {
    const dataDialog: IModal = {
      title: 'Edycja oddziału',
      actionButtonText: 'Zapisz',
      component: DoctorEditComponent,
      extraData: doctor,
    }
    return this.open(dataDialog)
  }

  private open(data: IModal): Observable<any> {
    const configDialog = new MatDialogConfig()
    configDialog.data = data
    return this.modal.afterCloseModal(configDialog)
  }
}
