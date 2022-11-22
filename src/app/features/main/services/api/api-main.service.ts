import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { CrossRefResponseInterface } from 'src/app/shared/models/http.model';

@Injectable({
  providedIn: 'root'
})
export class ApiMainService {
  constructor(private _HttpClient: HttpClient) { }

  getCrossrefRandomData() {
    return this._HttpClient.get<CrossRefResponseInterface>(env.apiUrl + `/works?sample=10&select=type`)
    .pipe(map((res: any) => { return res }), catchError((error: any) => { console.log(error); return of(error) }))
  }

  getAllWorksPaginated(cursor: string = '*') {
    return this._HttpClient.get<CrossRefResponseInterface>(env.apiUrl + `/works?select=DOI,title,publisher,author,type,created,URL&filter=from-pub-date:2018-01-01&rows=6&sort=published-online&order=desc&cursor=` + cursor)
    .pipe(map((res: any) => { return res }), catchError((error: any) => { console.log(error); return of(error) }))
  }

  getAllWorksPaginatedBySearch(query: string = '', cursor: string = '*') {
    return this._HttpClient.get<CrossRefResponseInterface>(env.apiUrl + `/works?query=` + query + `&select=DOI,title,publisher,author,type,created,URL&filter=from-pub-date:2018-01-01&rows=6&sort=relevance&order=desc&cursor=` + cursor)
    .pipe(map((res: any) => { return res }), catchError((error: any) => { console.log(error); return of(error) }))
  }
}
