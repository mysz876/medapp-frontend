import { Injectable } from '@angular/core';
import { GenericCRUDService } from '../../core/services/generic-crud.service';
import { Observable } from 'rxjs';
import { branchEnv } from '../configs/env';
import { IBranch } from '../models/branch.interface';
import { IResponse } from '../../shared/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(
    private crudService: GenericCRUDService,
  ) { }

  getBranches(): Observable<IBranch[]> {
    return this.crudService.genericGetAPIData(branchEnv.main)
  }

  getBranch(id: number): Observable<IBranch> {
    const path: string = this.getPath(id)
    return this.crudService.genericGetAPIData(path)
  }

  createBranch(payload: any): Observable<IResponse> {
    return this.crudService.genericPostDataToAPI(branchEnv.main, payload)
  }

  updateBranch(id: number, payload: any): Observable<IResponse> {
    const path = this.getPath(id)
    return this.crudService.genericPutDataToAPI(path, payload)
  }

  deleteBranch(id: number): Observable<IResponse> {
    const path = this.getPath(id)
    return this.crudService.genericDeleteAPIDataByID(path)
  }

  private getPath(id: number): string {
    return `${branchEnv.main}/${id}`
  }
}
