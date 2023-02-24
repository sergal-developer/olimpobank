import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { InputModule } from './input/input.module';
import { PanelModule } from './panel/panel.module';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CheckboxModule,
    InputModule,
    PanelModule
  ],
  exports: [
    ButtonModule,
    CheckboxModule,
    InputModule,
    PanelModule
  ]
})
export class ComponentsModule { }
