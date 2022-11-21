import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiMainService {
  constructor(private _HttpClient: HttpClient) { }

  getCrossrefRandomData() {
    return this._HttpClient.get(env.apiUrl + `/works?sample=10&select=type`)
      .pipe(
        // map((res: any) => {
        //   console.log(res)
        //   return res.json();
        // }),
        catchError((error: any) => {
          console.log(error);
          return of(error)
        })
      )
  }
}
