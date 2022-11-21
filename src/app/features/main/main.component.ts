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
    // this._FacadeMainService.getNextWorksPaginated();
    this._FacadeMainService.mockWorks();
  }

  onNextWorks() {
    this._FacadeMainService.getNextWorksPaginated();
  }

}
