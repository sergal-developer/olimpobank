import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SplashComponent],
  declarations: [SplashComponent]
})
export class SplashModule { }
