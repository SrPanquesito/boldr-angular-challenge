import { Component, OnInit } from '@angular/core';
import { FacadeMainService } from './services/facade/facade-main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {
  constructor(
    private _FacadeMainService: FacadeMainService
  ) { }

  ngOnInit(): void {
    this._FacadeMainService.getNextWorksPaginated();
  }

  onNextWorks() {
    this._FacadeMainService.getNextWorksPaginated();
  }

  onSearchWorks(e: any) {
    this._FacadeMainService.getNextWorksPaginatedBySearch(e)
  }

}
