import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HelpComponent],
  declarations: [HelpComponent]
})
export class HelpModule { }
