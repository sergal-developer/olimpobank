import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalConstants } from "src/app/common/globals/globalConstants";
import { OlimpoService } from "src/app/common/services/olimpoServices";

@Component({
  selector: 'dashboard-view',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {

  user: any = null;
  constructor(
    private router: Router,
    private service: OlimpoService,
    private gc: GlobalConstants) { }

  ngOnInit(): void {
    this.configHeader();
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

  requestCard(type: string) {
    this.router.navigate(['/app/request', type]);
  }

  detailsCard(card: any) {
    this.router.navigate(['/app/card', card.id]);
  }

  getProfile() {
    this.user = this.service.getProfile(this.user);
  }

  configHeader() {
    setTimeout(() => {
      this.gc.headerOptions.return.show = false;
      this.gc.headerOptions.return.route = '/app';
      this.gc.headerOptions.profile.show = true;
      this.gc.headerOptions.title.show = false;
      this.gc.headerOptions.title.content = '';
      this.gc.headerOptions.lateralMenu.show = true;
    }, 200);
  }

}