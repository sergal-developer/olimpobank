import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { ComponentsModule } from './common/components/components.module';
import { GlobalConstants } from './common/globals/globalConstants';

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

    DashboardModule,
    ComponentsModule,
  ],
  providers: [
    GlobalConstants,
    CurrencyPipe,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
