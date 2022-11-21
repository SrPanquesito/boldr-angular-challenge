import { Injectable } from '@angular/core';
import { ApiMainService } from '../api/api-main.service';
import { TableService } from 'src/app/shared/services/table.service';
import { first } from 'rxjs';
import { CrossRefResponseInterface } from 'src/app/shared/models/http.model';

@Injectable({
  providedIn: 'root'
})
export class FacadeMainService {
  constructor(
    private _ApiMainService: ApiMainService,
    private _TableService: TableService,
  ) { }

  public cursor: string = '*';

  getNextWorksPaginated() {
    this._ApiMainService.getAllWorksPaginated(this.cursor).pipe(first())
    .subscribe((res: CrossRefResponseInterface) => {
      this.cursor = res.message['next-cursor'];
      this._TableService.works = res.message.items;
    })
  }

  mockWorks() {
    this._TableService.works = new Array(6).fill({
      DOI: "10.1007/978-1-349-19059-1_43",
      publisher: "Macmillan Education UK-London",
      type: "book-chapter",
      created: {
          "date-time": "2015-12-22T11:24:46Z",
          timestamp: 1450783486000
      },
      URL: "http://dx.doi.org/10.1007/978-1-349-19059-1_43"
    })
  }
}
