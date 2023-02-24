import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(public gc: GlobalConstants) { }

  ngOnInit() {
    this.configHeader();
  }

  configHeader() {
    setTimeout(() => {
      this.gc.headerOptions.return.show = true;
      this.gc.headerOptions.return.route = '/app';
      this.gc.headerOptions.profile.show = false;
      this.gc.headerOptions.title.show = true;
      this.gc.headerOptions.title.content = `Notificaciones`;
      this.gc.headerOptions.lateralMenu.show = false;
    }, 200);
  }

}
