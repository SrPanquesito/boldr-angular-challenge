import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="h-[80vh]">
        <div class="flex justify-center items-center gap-4 h-full">
            <span class="text-xl font-poppins font-semibold text-gray-700 dark:text-gray-200">Error 404, Page not found...</span>
        </div>
    </div>
  `
})
export class NotFoundComponent {
  constructor() { }
}
