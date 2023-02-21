import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankTransferComponent } from './views/bankTransfer/bankTransfer.component';
import { CardDetailsComponent } from './views/cardDetails/cardDetails.component';
import { CardRequestComponent } from './views/cardRequest/cardRequest.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HelpComponent } from './views/help/help.component';
import { LoginComponent } from './views/login/login.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './views/register/register.component';
import { ResetComponent } from './views/reset/reset.component';
import { SplashComponent } from './views/splash/splash.component';
import { VerificationComponent } from './views/verification/verification.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'notification', component: NotificationsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'request', component: CardRequestComponent },
  { path: 'card', component: CardDetailsComponent },
  { path: 'transfer', component: BankTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
