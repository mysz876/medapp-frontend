import { Injectable } from '@angular/core';
import { GenericCRUDService } from '../../core/services/generic-crud.service';
import { IResponse } from '../../shared/models/response.interface';
import { doctorEnv } from '../configs/env';
import { Observable } from 'rxjs';
import { IDoctor } from '../models/doctor.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private crudService: GenericCRUDService,
  ) { }

  get(): Observable<IDoctor[]> {
    return this.crudService.genericGetAPIData(doctorEnv.main)
  }

  retriveData(id: number): Observable<IDoctor> {
    const path: string = this.getPath(id)
    return this.crudService.genericGetAPIData(path)
  }

  create(payload: any): Observable<IResponse> {
    return this.crudService.genericPostDataToAPI(doctorEnv.main, this.mapData(payload))
  }

  update(id: number, payload: any): Observable<IResponse> {
    const path = this.getPath(id)
    return this.crudService.genericPutDataToAPI(path, this.mapData(payload))
  }

  delete(id: number): Observable<IResponse> {
    const path = this.getPath(id)
    return this.crudService.genericDeleteAPIDataByID(path)
  }

  private getPath(id: number): string {
    return `${doctorEnv.main}/${id}`
  }

  private mapData(data: any): any {
    const mappedObj: any = {}
    !('name' in data) || (mappedObj.name = data.name)
    !('surname' in data) || (mappedObj.surname = data.surname)
    !('dayCount' in data) || (mappedObj.dayCount = data.dayCount)
    !('branch' in data) || (mappedObj.idBranch = data.branch.id)
    !('specialization' in data) || (mappedObj.idSpecialization = data.specialization.id)
    return mappedObj
  }
}
