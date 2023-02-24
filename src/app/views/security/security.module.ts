import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { ModulePackage } from 'src/app/common/models/interfaces';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ResetComponent } from '../reset/reset.component';
import { VerificationComponent } from '../verification/verification.component';
import { SplashComponent } from '../splash/splash.component';
import { SplashModule } from '../splash/splash.module';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { ResetModule } from '../reset/reset.module';
import { VerificationModule } from '../verification/verification.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
          path : '',
          component : SecurityComponent
      }
    ]),

    SplashModule,
    LoginModule,
    RegisterModule,
    ResetModule,
    VerificationModule
  ],
  exports: [SecurityComponent],
  declarations: [SecurityComponent]
})
export class SecurityModule { }

export let SecurityModulePackage: ModulePackage = {
  modules: [ SecurityModule ],
  routes: [
      {
          path: '',
          component: SecurityComponent,
          children: [
            { path: '', component: SplashComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'reset', component: ResetComponent },
            { path: 'verification', component: VerificationComponent },
          ]
      }
  ]
};
