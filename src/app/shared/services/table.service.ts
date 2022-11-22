import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor() { }

  private works$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public worksObs$ = this.works$.asObservable();
  public get works(): Array<any> { return this.works$.getValue() }
  public set works(data: Array<any>) { this.works$.next(data) }

  public loadingData = false;
}
