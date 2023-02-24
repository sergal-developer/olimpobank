import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetComponent } from './reset.component';
import { ComponentsModule } from 'src/app/common/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [ResetComponent],
  declarations: [ResetComponent]
})
export class ResetModule { }
