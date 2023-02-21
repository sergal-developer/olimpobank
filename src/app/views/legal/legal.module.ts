import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalComponent } from './legal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LegalComponent],
  declarations: [LegalComponent]
})
export class LegalModule { }
