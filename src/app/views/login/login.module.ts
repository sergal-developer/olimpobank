import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { OlimpoService } from 'src/app/common/services/olimpoServices';
import { ComponentsModule } from 'src/app/common/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [OlimpoService]
})
export class LoginModule { }
