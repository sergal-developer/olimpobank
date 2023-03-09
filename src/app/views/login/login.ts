import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../../common/components/input/input';


@customElement('login-view')
export class LoginView extends LitElement {

  responseMessage: string | null = null;

  login(evt: any) {
    console.log('login: ', evt);
  }

  gotoRegister(evt: any) {
    console.log('gotoRegister: ', evt);
  }

  gotoReset(evt: any) {
    console.log('gotoReset: ', evt);
  }

  render() {
    return html`
      <div id="login" class="screen-form alingToCenter">
        <h1>Bienvenido!</h1>
        <h5 class="emphasis">La mejor banca en linea del pais.</h5>

        <div class="form">
          <app-input id="user" title="Usuario / Cliente" tabindex="1"></app-input>
          <app-input id="password" title="Password" tabindex="2"></app-input>
          <app-input id="password2" title="Password2" disabled="true" type="number" required="true" ></app-input>

          <div class="col-12">
            <span><button app-button class="link" @click="${ this.gotoReset }">No recuerdo mi contraseña</button></span>
          </div>

          ${ this.responseMessage ??
              html`
              <div class="col-12">
                <span>${ this.responseMessage }</span>
              </div>`
          }

          <div class="col-12">
            <button app-button class="big"  @click="${ this.login }">Acceder</button>
          </div>

          <div class="col-12">
            <span>¿Eres nuevo por aqui?, <button app-button class="link" @click="${ this.gotoRegister }">Registrate</button> </span>
          </div>
        </div>
      </div>
    `;
  }
}
