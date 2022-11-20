import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <span>{{ title }} app is running!</span> -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'boldr-angular-challenge';
}
