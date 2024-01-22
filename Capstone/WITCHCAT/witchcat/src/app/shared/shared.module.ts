import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCategoryComponent } from '../cards/card-category/card-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CardCategoryComponent],
  imports: [
    RouterModule,
    CommonModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CardCategoryComponent,
    NgbDropdownModule
  ]
})
export class SharedModule { }
