import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableService } from 'src/app/shared/services/table.service';
import { Observable } from 'rxjs';
import { faCircleNotch, faSync, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'table-paginated-work-cards',
  templateUrl: './paginated-work-cards.component.html',
  styles: [
  ]
})
export class PaginatedWorkCardsComponent implements OnInit {
  constructor(public _TableService: TableService) { }

  public works$: Observable<Array<any>> = this._TableService.worksObs$;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();

  faSpinner = faSpinner;

  ngOnInit(): void {
  }

  onNextEmit() {
    this.onNext.emit(true);
  }

}
