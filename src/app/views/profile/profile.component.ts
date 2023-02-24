import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
      this.gc.headerOptions.title.content = `Mi Perfil`;
      this.gc.headerOptions.lateralMenu.show = false;
    }, 200);
  }

}
