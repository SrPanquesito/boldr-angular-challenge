import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/core/services/darkmode.service';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ui-darkmode-button',
  templateUrl: './ui-darkmode-button.component.html',
  styles: [
  ]
})
export class UiDarkmodeButtonComponent implements OnInit {
  constructor(public _DarkmodeService: DarkmodeService) { }

  faMoon = faMoon;
  faSun = faSun;

  ngOnInit(): void {
  }

  toggleDarkmode() {
    this._DarkmodeService.toggleDarkmode();
  }
}
