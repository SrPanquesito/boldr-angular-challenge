import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiDarkmodeButtonComponent } from './ui/ui-darkmode-button/ui-darkmode-button.component';
import { HeaderComponent } from './components/header/header.component';
import { UiCardComponent } from './ui/ui-card/ui-card.component';
import { UiTypeIconComponent } from './ui/ui-card/ui-type-icon/ui-type-icon.component';
import { SimplifyWorkTypePipe } from './pipes/simplify-work-type.pipe';
import { UiBadgeComponent } from './ui/ui-badge/ui-badge.component';
import { PaginatedWorkCardsComponent } from './components/table/paginated-work-cards/paginated-work-cards.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [
    UiDarkmodeButtonComponent,
    HeaderComponent,
    UiCardComponent,
    UiTypeIconComponent,
    SimplifyWorkTypePipe,
    UiBadgeComponent,
    PaginatedWorkCardsComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FontAwesomeModule,
    UiDarkmodeButtonComponent,
    HeaderComponent,
    UiCardComponent,
    SimplifyWorkTypePipe,
    UiBadgeComponent,
    PaginatedWorkCardsComponent,
    SearchInputComponent
  ]
})
export class SharedModule { }
