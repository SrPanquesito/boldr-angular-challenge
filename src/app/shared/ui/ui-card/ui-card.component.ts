import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './ui-card.component.html',
  styles: [
  ]
})
export class UiCardComponent implements OnInit {
  constructor() { }

  @Input() type: String = '';

  ngOnInit(): void {
  }

}
