import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankTransferComponent } from './bankTransfer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BankTransferComponent
  ],
  declarations: [BankTransferComponent]
})
export class BankTransferModule { }
