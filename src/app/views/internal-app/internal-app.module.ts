import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalAppComponent } from './internal-app.component';
import { ModulePackage } from 'src/app/common/models/interfaces';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { HelpComponent } from '../help/help.component';
import { CardRequestComponent } from '../cardRequest/cardRequest.component';
import { CardDetailsComponent } from '../cardDetails/cardDetails.component';
import { BankTransferComponent } from '../bankTransfer/bankTransfer.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ProfileModule } from '../profile/profile.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { HelpModule } from '../help/help.module';
import { CardRequestModule } from '../cardRequest/cardRequest.module';
import { CardDetailsModule } from '../cardDetails/cardDetails.module';
import { BankTransferModule } from '../bankTransfer/bankTransfer.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/common/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
          path : '',
          component : InternalAppComponent
      }
    ]),

    ComponentsModule,
    DashboardModule,
    ProfileModule,
    NotificationsModule,
    HelpModule,
    CardRequestModule,
    CardDetailsModule,
    BankTransferModule
  ],
  exports: [InternalAppComponent],
  declarations: [InternalAppComponent]
})
export class InternalAppModule { }

export let InternalAppModulePackage: ModulePackage = {
  modules: [ InternalAppModule ],
  routes: [
      {
          path: 'app',
          component: InternalAppComponent,
          children: [
            { path: '', component: DashboardComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'notification', component: NotificationsComponent },
            { path: 'help', component: HelpComponent },
            { path: 'request/:type', component: CardRequestComponent },
            { path: 'card/:id', component: CardDetailsComponent },
            { path: 'card/:id/:operation', component: BankTransferComponent },
          ]
      }
  ]
};
