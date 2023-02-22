import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  responseMessage: string = '';

  constructor(
    private router: Router,
    private service: OlimpoService,
    private gc: GlobalConstants) { }

  ngOnInit() {
    this.gotoDashboard();
  }

  login() {
    this.responseMessage = '';
    const inputs = document.querySelectorAll('#login input');
    const credentials: any = {
      password: null,
      email: null,
      client: null
    }

    inputs.forEach((input: any) => {
      credentials[input.id] = input.value.toString();
    });

    credentials.email = credentials.client = credentials.user;
    const login = this.service.loginClient(credentials);

    if(!login) {
      this.responseMessage = `el usuario ${ credentials.user } no existe o el password no es el correcto`;
    } else {
      const currentUser = this.service.searchClient(credentials);
      this.gc.currentUser = currentUser;
      this.gotoDashboard();
    }
  }

  gotoRegister() {
    this.router.navigate(['/register']);
  }

  gotoReset() {
    this.router.navigate(['/reset']);
  }

  gotoDashboard() {
    console.log('this.gc.currentUser : ', this.gc.currentUser );
    if (this.gc.currentUser) {
      this.router.navigate(['/dashboard']);
    }
  }
}
