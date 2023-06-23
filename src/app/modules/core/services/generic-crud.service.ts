import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GenericCRUDService {

  constructor(
    private http: HttpClient
  ) { }

  genericGetAPIData<T>(apiUrl: string, options?: any): Observable<any> {
    return this.http.get<T>(apiUrl, options).pipe(catchError((err) => {this.errorHandler(err); return of()}))
  }

  genericPostDataToAPI<T>(apiUrl: string, payload: any, options?: any): Observable<any> {
    return this.http.post<T>(apiUrl, payload, options).pipe(catchError((err) => {this.errorHandler(err); return of()}))
  }

  genericPutDataToAPI<T>(apiUrl: string, payload: any, options?: any): Observable<any> {
    return this.http.put<T>(apiUrl, payload, options).pipe(catchError((err) => {this.errorHandler(err); return of()}))
  }

  genericDeleteAPIDataByID<T>(apiUrl: string, options?: any): Observable<any> {
    return this.http.delete<T>(apiUrl, options).pipe(catchError((err) => {this.errorHandler(err); return of()}))
  }

  errorHandler(error: any): void {
    console.log(error)
  }
}
