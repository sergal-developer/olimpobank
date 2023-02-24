import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = null;

  constructor(
    public gc: GlobalConstants,
    private service: OlimpoService) { }

  ngOnInit() {
    this.configHeader();
    this.getProfile();
  }

  getProfile() {
    this.user = this.gc.currentUser;
    this.user = this.service.getProfile(this.user);
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
