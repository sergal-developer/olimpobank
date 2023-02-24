import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UXComponent } from './UX.component';
import { ComponentsModule } from 'src/app/common/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [UXComponent],
  declarations: [UXComponent]
})
export class UXModule { }
