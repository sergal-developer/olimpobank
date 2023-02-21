import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NotificationsComponent],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }
