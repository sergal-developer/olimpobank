import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-internal-app',
  templateUrl: './internal-app.component.html',
  styleUrls: ['./internal-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InternalAppComponent implements OnInit {

  user: any = null;

  panel = {
    id: 'lateral-panel',
    title: 'Menu',
    size: 'semifull',
    closeOnClickOverlap: true,
    customClass: '',
    open: false,
    showClose: false
  }

  constructor(
    private router: Router,
    private service: OlimpoService,
    public gc: GlobalConstants
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    console.log('this.gc.currentUser : ', this.gc.currentUser );
    if (this.gc.currentUser) {
      this.user = this.gc.currentUser;
      this.getProfile();
    } else {
      this.router.navigate(['/login']);
    }
  }

  getProfile() {
    this.user = this.service.getProfile(this.user);
  }

  openOptions() {
    this.panel.open = true;
  }

  goReturn() {
    this.router.navigate([this.gc.headerOptions.return.route]);
  }
  
  goProfile() {
    this.router.navigate(['/app/profile']);
  }

  goNotifications() {
    this.router.navigate(['/app/notification']);
  }

  goHelp() {
    this.router.navigate(['/app/help']);
  }

  gotoPrivacy() {
    this.router.navigate(['/legal/privacy']);
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  closeSession() {
    localStorage.removeItem('USESSION');
    this.gotoLogin();
  }


}
