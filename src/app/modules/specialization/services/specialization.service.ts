import { Injectable } from '@angular/core';
import { IResponse } from '../../shared/models/response.interface';
import { Observable } from 'rxjs';
import { GenericCRUDService } from '../../core/services/generic-crud.service';
import { specializationEnv } from '../configs/env';
import { ISpecialization } from '../models/specialization.interface';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor(
    private crudService: GenericCRUDService,
  ) { }

  getSpecializations(): Observable<ISpecialization[]> {
    return this.crudService.genericGetAPIData(specializationEnv.main)
  }

  getSpecialization(id: number): Observable<ISpecialization> {
    const path: string = this.getPath(id)
    return this.crudService.genericGetAPIData(path)
  }

  createSpecialization(payload: any): Observable<IResponse> {
    return this.crudService.genericPostDataToAPI(specializationEnv.main, payload)
  }

  updateSpecialization(id: number, payload: any): Observable<IResponse> {
    const path = this.getPath(id)
    return this.crudService.genericPutDataToAPI(path, payload)
  }

  deleteSpecialization(id: number): Observable<IResponse> {
    const path = this.getPath(id)
    return this.crudService.genericDeleteAPIDataByID(path)
  }

  private getPath(id: number): string {
    return `${specializationEnv.main}/${id}`
  }
}
