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
    this.router.navigate(['/request', type]);
  }

  detailsCard(card: any) {
    this.router.navigate(['/card', card.id]);
  }

  goProfile() {
    this.router.navigate(['/profile']);
  }

  goNotifications() {
    this.router.navigate(['/notification']);
  }

  goHelp() {
    this.router.navigate(['/help']);
  }

  getProfile() {
    this.user = this.service.getProfile(this.user);
  }

}