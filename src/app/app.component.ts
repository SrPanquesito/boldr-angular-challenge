import { Component } from '@angular/core';
import { DarkmodeService } from './core/services/darkmode.service';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <span>{{ title }} app is running!</span>
    <router-outlet></router-outlet>
  </main>
  `
})
export class AppComponent {
  constructor(public _DarkmodeService: DarkmodeService) { }

  title = 'boldr-angular-challenge';
}
