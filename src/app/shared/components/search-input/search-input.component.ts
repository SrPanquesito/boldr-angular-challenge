import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, debounceTime, filter, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: [
  ]
})
export class SearchInputComponent implements OnInit, OnDestroy {
  constructor() { }

  @Input() options: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput!: ElementRef;

  public search: FormControl = new FormControl('');
  private destroy$: Subject<unknown> = new Subject<unknown>();

  faSearch = faSearch;

  ngOnInit(): void {
    this.onSearch();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  onEmitInput() {
    this.onChange.emit(this.search.value?.toLowerCase().trim().split(' ').join('+'))
  }

  private onSearch(): void {
    this.search.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(1000),
        distinctUntilChanged(),
        map(value => this.onChange.emit(value?.toLowerCase().trim().split(' ').join('+')) ),
      ).subscribe();
  }

}
