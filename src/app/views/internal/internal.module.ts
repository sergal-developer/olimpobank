import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalComponent } from './internal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    InternalComponent
  ],
  declarations: [InternalComponent]
})
export class InternalModule { }
