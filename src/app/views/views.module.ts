import { NgModule } from '@angular/core';
import { BankTransferModule } from './bankTransfer/bankTransfer.module';
import { CardDetailsModule } from './cardDetails/cardDetails.module';
import { CardRequestModule } from './cardRequest/cardRequest.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HelpModule } from './help/help.module';
import { LoginModule } from './login/login.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProfileModule } from './profile/profile.module';
import { RegisterModule } from './register/register.module';
import { ResetModule } from './reset/reset.module';
import { SplashModule } from './splash/splash.module';
import { VerificationModule } from './verification/verification.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SplashModule,
    LoginModule,
    RegisterModule,
    ResetModule,
    VerificationModule,
    DashboardModule,
    ProfileModule,
    NotificationsModule,
    HelpModule,
    CardRequestModule,
    CardDetailsModule,
    BankTransferModule
  ],
  exports: [
    SplashModule,
    LoginModule,
    RegisterModule,
    ResetModule,
    VerificationModule,
    DashboardModule,
    ProfileModule,
    NotificationsModule,
    HelpModule,
    CardRequestModule,
    CardDetailsModule,
    BankTransferModule
  ]
})
export class ViewsModule { }
