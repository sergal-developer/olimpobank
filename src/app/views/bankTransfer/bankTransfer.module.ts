import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankTransferComponent } from './bankTransfer.component';
import { ComponentsModule } from 'src/app/common/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    BankTransferComponent
  ],
  declarations: [BankTransferComponent]
})
export class BankTransferModule { }
