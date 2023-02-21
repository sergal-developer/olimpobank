import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './cardDetails.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CardDetailsComponent],
  declarations: [CardDetailsComponent]
})
export class CardDetailsModule { }
