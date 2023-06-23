import { Component, OnInit } from '@angular/core';
import { Observable, concatMap, of, tap } from 'rxjs';
import { ISpecialization } from '../../models/specialization.interface';
import { SpecializationService } from '../../services/specialization.service';
import { SpecializationDialogService } from '../../services/specialization-dialog.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { ITableConfig } from 'src/app/modules/shared/models/table.interface';
import { specializationTable } from '../../configs/table';

@Component({
  selector: 'app-specialization-list',
  templateUrl: './specialization-list.component.html',
  styleUrls: ['./specialization-list.component.scss']
})
export class SpecializationListComponent implements OnInit {

  constructor(
    private specServ: SpecializationService,
    private specDialogServ: SpecializationDialogService,
    private snackService: SnackbarService,
  ) { }

  specializations$!: Observable<ISpecialization[]>
  tableConfig: ITableConfig[] = specializationTable

  ngOnInit(): void {
    this.reload()
  }

  private reload(): void {
    this.specializations$ = this.specServ.getSpecializations()
  }

  deleteSpecizalization(specialization: ISpecialization): void {
    const info = `Czy na pewno chcesz usunąc specjalizacje o nazwie: ${specialization.name}??`
    this.specDialogServ.openConfirm(info).pipe(
      concatMap(result => result ? this.deleteService(specialization.id) : of())
    ).subscribe()
  }

  editSpecizalization(specialization: ISpecialization): void {
    this.specDialogServ.openEdit(specialization).pipe(
      concatMap(result => result ? this.editService(specialization.id, result) : of())
    ).subscribe()
  }

  private editService(idSpecialization:number, data:any): Observable<any> {
    return this.specServ.updateSpecialization(idSpecialization, data).pipe(
      tap(resp => {
        if(resp.result) { this.reload() }
        this.snackService.open(resp.msg)
      })
    )
  }

  private deleteService(idSpecialization: number): Observable<any> {
    return this.specServ.deleteSpecialization(idSpecialization).pipe(
      tap(resp=> {
        if(resp.result) { this.reload() }
        this.snackService.open(resp.msg)
      })
    )
  }
}
