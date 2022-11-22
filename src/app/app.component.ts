import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from './core/services/darkmode.service';

@Component({
  selector: 'app-root',
  template: `
  <main [ngClass]="{ 'dark': _DarkmodeService.darkMode }">
    <div class="fixed top-3 right-3 z-50">
      <ui-darkmode-button></ui-darkmode-button>
    </div>
    <app-header></app-header>
    <router-outlet></router-outlet>
  </main>
  `
})
export class AppComponent implements OnInit {
  constructor(public _DarkmodeService: DarkmodeService) { }

  ngOnInit() {
    this._DarkmodeService.init();
  }
}
