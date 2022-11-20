import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiDarkmodeButtonComponent } from './ui/ui-darkmode-button/ui-darkmode-button.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    UiDarkmodeButtonComponent,
    HeaderComponent
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
    HeaderComponent
  ]
})
export class SharedModule { }
