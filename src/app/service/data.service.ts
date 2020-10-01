import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(err => {
          return throwError(err);
        })
      );
  }

}
