import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../../models/doctor.interface';
import { Observable, concatMap, of, tap } from 'rxjs';
import { ITableConfig } from 'src/app/modules/shared/models/table.interface';
import { doctorTable } from '../../configs/table';
import { DoctorService } from '../../services/doctor.service';
import { DoctorDialogService } from '../../services/doctor-dialog.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  constructor(
    private doctorService: DoctorService,
    private doctorDialogService: DoctorDialogService,
    private snackService: SnackbarService,
  ) { }

  doctors$!: Observable<IDoctor[]>
  tableConfig: ITableConfig[] = doctorTable

  ngOnInit(): void {
    this.reload()
  }

  private reload(): void {
    this.doctors$ = this.doctorService.get()
  }

  deleteDoctor(doctor: IDoctor): void {
    const info = `Czy na pewno chcesz usunąc ${doctor.name} ${doctor.surname}??`
    this.doctorDialogService.openConfirm(info).pipe(
      concatMap(result => result ? this.deleteService(doctor.id) : of())
    ).subscribe()
  }

  editDoctor(doctor: IDoctor): void {
    this.doctorDialogService.openEdit(doctor).pipe(
      concatMap(result => result ? this.editService(doctor.id, result) : of())
    ).subscribe()
  }

  private deleteService(idDoctor: number): Observable<any> {
    return this.doctorService.delete(idDoctor).pipe(
      tap(resp => {
        if(resp.result) { this.reload() }
        this.snackService.open(resp.msg)
      })
    )
  }

  private editService(idDoctor: number, data: any): Observable<any> {
    return this.doctorService.update(idDoctor, data).pipe(
      tap(resp => {
        if(resp.result) { this.reload() }
        this.snackService.open(resp.msg)
      })
    )
  }
}
