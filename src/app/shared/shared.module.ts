import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class SharedModule { }
