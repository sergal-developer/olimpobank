import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './common/components/components.module';
import { GlobalConstants } from './common/globals/globalConstants';
import { OlimpoService } from './common/services/olimpoServices';
import { OlimpoCore } from './common/services/olimpoCore';
import { SecurityModulePackage } from './views/security/security.module';
import { InternalAppModulePackage } from './views/internal-app/internal-app.module';
import { UXModule } from './views/UX/UX.module';
import { LegalModule } from './views/legal/legal.module';

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
    
    LegalModule,
    UXModule,

    ...SecurityModulePackage.modules,
    ...InternalAppModulePackage.modules,
  ],
  providers: [
    GlobalConstants,
    OlimpoCore,
    OlimpoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
