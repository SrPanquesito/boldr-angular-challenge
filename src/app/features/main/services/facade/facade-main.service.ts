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
    this._TableService.works = new Array(4).fill({
      DOI: "10.1007/978-1-349-19059-1_43",
      publisher: "Macmillan Education UK-London",
      type: "book-chapter",
      created: {
          "date-time": "2015-12-22T11:24:46Z",
          timestamp: 1450783486000
      },
      URL: "http://dx.doi.org/10.1007/978-1-349-19059-1_43"
    });
    this._TableService.works.push({
      DOI: "10.29171/azu_acku_risalah_pk6546_seen74_1400",
      title: [
          "[گلستان سعدی] /"
      ],
      author: [
        {
            family: "Matthew Paris",
            sequence: "first",
            affiliation: []
        },
        {
            family: "Matthew Paris",
            sequence: "additional",
            affiliation: []
        }
      ],
      publisher: "Afghanistan Centre at Kabul University",
      type: "monograph",
      created: {
          "date-time": "2018-10-17T04:40:11Z",
          timestamp: 1539751211000
      },
      URL: "http://dx.doi.org/10.29171/azu_acku_risalah_pk6546_seen74_1400"
    });
    this._TableService.works.push(
      {
        DOI: "10.31274/cpn-20191022-000",
        title: [
            "Pesticide Impact on White Mold (Sclerotinia Stem Rot) and Soybean Yield"
        ],
        publisher: "Crop Protection Netework",
        type: "report",
        created: {
            "date-time": "2019-10-22T21:44:27Z",
            timestamp: 1571780667000
        },
        URL: "http://dx.doi.org/10.31274/cpn-20191022-000"
    });

    console.warn(this._TableService.works)
  }


}
