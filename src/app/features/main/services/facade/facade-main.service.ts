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

  private cursor: string = '*';
  public previousQuery: string = '';

  resetCursor() {
    this.cursor = '*';
  }

  getNextWorksPaginated() {
    this._TableService.loadingData = true;

    this._ApiMainService.getAllWorksPaginated(this.cursor).pipe(first())
    .subscribe((res: CrossRefResponseInterface) => {
      this.cursor = res.message['next-cursor'];
      this._TableService.works = res.message.items;
      this._TableService.loadingData = false;
    })
  }

  getNextWorksPaginatedBySearch(e: string) {
    if (e === '') { this.previousQuery = ''; this.resetCursor(); this.getNextWorksPaginated(); return }
    if (this.previousQuery !== e) { this.previousQuery = e; this.resetCursor() }

    this._TableService.loadingData = true;

    this._ApiMainService.getAllWorksPaginatedBySearch(e, this.cursor).pipe(first())
    .subscribe((res: CrossRefResponseInterface) => {
      this.cursor = res.message['next-cursor'];
      this._TableService.works = res.message.items;
      this._TableService.loadingData = false;
    })
  }
}
