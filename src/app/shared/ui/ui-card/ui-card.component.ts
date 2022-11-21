import { Component, OnInit, Input } from '@angular/core';
import { WorksItemsInterface } from '../../models/works.model';

@Component({
  selector: 'ui-card',
  templateUrl: './ui-card.component.html',
  styles: [
  ]
})
export class UiCardComponent implements OnInit {
  constructor() { }

  @Input() data?: WorksItemsInterface;

  ngOnInit(): void {
  }

}
