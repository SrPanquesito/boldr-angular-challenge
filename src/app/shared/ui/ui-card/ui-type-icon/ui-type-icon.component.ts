import { Component, OnInit, Input } from '@angular/core';
import { faBook, faNewspaper, faFileAlt, faFileSignature, faPrint, faTable, faAsterisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ui-type-icon',
  templateUrl: './ui-type-icon.component.html',
  styles: [
  ]
})
export class UiTypeIconComponent implements OnInit {
  constructor() { }

  @Input() type: String = '';

  faIcon = faAsterisk;
  faBook = faBook;
  faNewspaper = faNewspaper;
  faFileAlt = faFileAlt;
  faFileSignature = faFileSignature;
  faPrint = faPrint;
  faTable = faTable;
  faAsterisk = faAsterisk;

  ngOnInit(): void {
    this.renderIconBasedOnType(this.type);
  }

  renderIconBasedOnType(type: String) {
    if (type.includes('book')) this.faIcon = this.faBook;
    if (type.includes('article')) this.faIcon = this.faNewspaper;
    if (type.includes('data')) this.faIcon = this.faFileAlt;
    if (type.includes('reference')) this.faIcon = this.faFileSignature;
    if (type.includes('post')) this.faIcon = this.faPrint;
    if (type.includes('component')) this.faIcon = this.faTable;
  }
}