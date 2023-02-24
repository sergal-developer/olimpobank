import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  client: any = null;
  responseMessage: string = '';
  updatedPassword = false;

  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private service: OlimpoService,
    private gc: GlobalConstants
  ) { }

  ngOnInit() {

    /** Getting query params from URL **/
    this._activatedRoute.queryParams.subscribe(params => {
      if (params.client) {
        this.searchClient(params.client);
      }
    });
  }

  searchClient(clientID: string) {
    clientID = this.service.decode(clientID);
    this.client = this.service.searchClient({ client: clientID });
    console.log('this.client: ', this.client);
  }

  restore() {
    this.responseMessage = '';
    const inputs = document.querySelectorAll('#restore input');
    const credentials: any = {}
    const invalidFields = [];

    inputs.forEach((input: any) => {
      if (input.required && !input.value) {
        invalidFields.push(input);
      }
      credentials[input.id] = input.value;
    });

    if(invalidFields.length) {
      this.responseMessage = `debe de llenar los campos requeridos`;
      return;
    }

    credentials.email = credentials.user;

    // check if exist client 
    let clientExist = this.service.searchClient(credentials);
    if (!clientExist) {
      this.responseMessage = `El usuario ${ credentials.user } no existe en nuestros registros`;
      return;
    } else {
      this.client = clientExist;
    }
  }

  updatePassword() {
    this.responseMessage = '';
    const inputs = document.querySelectorAll('#resetPassword input');
    const credentials: any = {}
    const invalidFields = [];

    inputs.forEach((input: any) => {
      if (input.required && !input.value) {
        invalidFields.push(input);
      }
      credentials[input.id] = input.value;
    });

    if(invalidFields.length) {
      this.responseMessage = `debe de llenar los campos requeridos`;
      return;
    }

    if (credentials.password !== credentials.passwordConfirmation) {
      this.responseMessage = `la constraseña debe de coincidir`;
      return;
    }

    this.client.password = credentials.password;

    //  update password client
    let clientExist = this.service.updateClient(this.client);
    if (!clientExist) {
      this.responseMessage = `El usuario no pudo ser actualizado`;
      return;
    } else {
      this.showUpdatedPassword();
    }
  }

  showUpdatedPassword() {
    this.updatedPassword = true;
    setTimeout(() => {
      this.login();
    },5000);
  }

  gotoDashboard() {
    this.router.navigate(['/app']);
  }

  login() {
    this.router.navigate(['/login']);
  }

}
