import { Component, OnInit } from '@angular/core';
import { Observable, concatMap, of, tap } from 'rxjs';
import { IBranch } from '../../models/branch.interface';
import { BranchService } from '../../services/branch.service';
import { ITableConfig } from 'src/app/modules/shared/models/table.interface';
import { branchTable } from '../../configs/table';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { BranchDialogService } from '../../services/branch-dialog.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {

  constructor(
    private branchService: BranchService,
    private branchDailogService: BranchDialogService,
    private snackService: SnackbarService,
  ) { }

  branches$!: Observable<IBranch[]>
  tableConfig: ITableConfig[] = branchTable

  ngOnInit(): void {
    this.reload()
  }

  editBranch(branch: IBranch): void {
    this.branchDailogService.openEdit(branch).pipe(
      concatMap(result => result ? this.editService(branch.id, result) : of())
    ).subscribe()
  }

  deleteBranch(branch: IBranch): void {
    const info = `Czy na pewno chcesz usunąc oddział o nazwie: ${branch.name}??`
    this.branchDailogService.openConfirm(info).pipe(
      concatMap(result => result ? this.deleteService(branch.id) : of())
    ).subscribe()
  }

  private editService(idBranch:number, data:any): Observable<any> {
    return this.branchService.updateBranch(idBranch, data).pipe(
      tap(resp => {
        if(resp.result) { this.reload() }
        this.snackService.open(resp.msg)
      })
    )
  }

  private deleteService(idBranch: number): Observable<any> {
    return this.branchService.deleteBranch(idBranch).pipe(
      tap(resp=> {
        if(resp.result) { this.reload() }
        this.snackService.open(resp.msg)
      })
    )
  }

  private reload(): void {
    this.branches$ = this.branchService.getBranches()
  }
}
