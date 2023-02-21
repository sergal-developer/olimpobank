import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './common/components/components.module';
import { GlobalConstants } from './common/globals/globalConstants';
import { ViewsModule } from './views/views.module';
import { OlimpoService } from './common/services/olimpoServices';
import { OlimpoCore } from './common/services/olimpoCore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ViewsModule
  ],
  providers: [
    GlobalConstants,
    OlimpoCore,
    OlimpoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
