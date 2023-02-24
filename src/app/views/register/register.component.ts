import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  responseMessage: string = '';
  restorePassword = false;
  welcomeScreen = false;
  credentials: any = {};

  constructor(
    private router: Router,
    private service: OlimpoService,
    private gc: GlobalConstants) { }

  ngOnInit() {
  }

  register() {
    this.responseMessage = '';
    const inputs = document.querySelectorAll('#register input');
    const credentials: any = {}
    const invalidFields: any = [];

    inputs.forEach((input: any) => {
      
      if (input.id === 'terms') {
        credentials[input.id] = input.checked;
      } else {
        credentials[input.id] = input.value;
        
        if (input.required && !input.value) {
          invalidFields.push(input);
        }
      }
    });
    
    if (invalidFields.length) {
      this.responseMessage = `debe de llenar los campos requeridos`;
      return;
    }

    if (credentials.password !== credentials.passwordConfirmation) {
      this.responseMessage = `la constraseña debe de coincidir`;
      return;
    }

    if (!credentials.terms) {
      this.responseMessage = `Debe de aceptar los terminos y condiciones`;
      return;
    }

    this.gc.showLoader();

    // check if exist client 
    let clientExist = this.service.searchClient(credentials);
    if (clientExist) {
      this.responseMessage = `el usuario ${credentials.email} ya existe quieres reestablecer la contraseña?`;
      this.restorePassword = true;
      this.credentials = clientExist;
      return;
    } else {
      const newClient = this.service.registerClient(credentials);
      if (newClient) {
        this.goWelcomeScreen();
        this.credentials = newClient;
      }
    }
  }

  resetForm() {
    const inputs = document.querySelectorAll('#register input');

    inputs.forEach((input: any) => {
      input.value = null;
      input.checked = false;
    });

  }

  login() {
      this.router.navigate(['/login']);
  }

  gotoRestore() {
    const client = this.service.encode(this.credentials.client);
    this.router.navigate([`/reset`], { queryParams: { client: client } });
  }

  gotoTerms() {
    this.router.navigate(['/legal/terms']);
  }

  gotoPrivacy() {
    this.router.navigate(['/legal/privacy']);
  }

  gotoDashboard() {
    this.router.navigate(['/app']);
  }

  goWelcomeScreen() {
    this.welcomeScreen = true;

    setTimeout(() => {
      this.gc.closeLoader();
    }, 3000);
    // setTimeout(() => {
    //   this.login();
    // }, 8000);
  }
}
