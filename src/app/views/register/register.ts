import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('register-view')
export class RegisterView extends LitElement {
  
  render() {
    return html`
    <div class="screen-form alingToCenter" *ngIf="welcomeScreen">
  <h1>Bienvenido</h1>
  <h2 class="emphasis">Ahora formas parte de la familia Olimpica</h2>

  <div class="form" *ngIf="credentials">
    <h3 class="link">{{ credentials.email }}</h3>
    <!-- <h4>{{ credentials.name }} {{ credentials.lastName }}</h4> -->

    <h4>Numero de cliente: <b>{{ credentials.client }}</b></h4>
  </div>

  <button app-button class="big" (click)="gotoDashboard()">Ir a Dashboard</button>
</div>

<div class="screen-form alingToCenter" *ngIf="!welcomeScreen">
  <h1>¿Eres nuevo por aqui?</h1>
  <h5 class="emphasis">Cuentanos un poco de ti, completa el formulario</h5>


  <div class="form" id="register">
    <app-input [id]="'name'" [title]="'Nombre'" [required]="true"></app-input>
    <app-input [id]="'lastName'" [title]="'Apellido'" [required]="true"></app-input>
    <app-input [id]="'email'" [title]="'Correo electronico'" [required]="true"></app-input>
    <app-input [id]="'password'" [title]="'Constraseña'" [required]="true"></app-input>
    <app-input [id]="'passwordConfirmation'" [title]="'Confirmar Constraseña'" [required]="true"></app-input>


    <div class="checkbox-compose">
      <app-checkbox [id]="'terms'" [title]="''"></app-checkbox>
      <div>
        Acepto los <span class="link" (click)="gotoTerms()">Terminos y Condiciones</span> y los terminos del
        <span class="link" (click)="gotoPrivacy()">Aviso de privacidad.</span>
      </div>
    </div>


    <div class="col-12" *ngIf="responseMessage">
      <span>{{ responseMessage }}</span>
    </div>

    <div class="col-12">
      <button app-button class="big" *ngIf="restorePassword" (click)="gotoRestore()">Reestablecer contraseña</button>
      <button app-button class="big" (click)="register()">Registrarse</button>
    </div>

  </div>

</div>
    `;
  }
}
