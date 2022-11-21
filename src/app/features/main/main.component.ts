import { Component, OnInit } from '@angular/core';
import { ApiMainService } from './services/api/api-main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {
  constructor(private _ApiMainService: ApiMainService) { }

  ngOnInit(): void {
    this._ApiMainService.getCrossrefRandomData().subscribe(res => console.log(res))
  }

}
