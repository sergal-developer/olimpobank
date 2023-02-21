import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [OlimpoService]
})
export class LoginModule { }
