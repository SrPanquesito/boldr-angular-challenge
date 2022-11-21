import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableService } from 'src/app/shared/services/table.service';
import { Observable } from 'rxjs';
import { CrossRefResponseInterface } from 'src/app/shared/models/http.model';

@Component({
  selector: 'table-paginated-work-cards',
  templateUrl: './paginated-work-cards.component.html',
  styles: [
  ]
})
export class PaginatedWorkCardsComponent implements OnInit {
  constructor(private _TableService: TableService) { }

  public works$: Observable<Array<any>> = this._TableService.worksObs$;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onNextEmit() {
    this.onNext.emit(true);
  }

}
