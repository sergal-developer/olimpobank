import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('profile-view')
export class ProfileView extends LitElement {
  
  render() {
    return html`
    <div class="content">

<h1>{{ user.name }} {{ user.lastName }}</h1>
<hr>
<div class="information-list">
  <div class="information-group">General</div>

  <div class="information-group-content">

    <div class="item">
      <h3> Correo electronico </h3>
      <h4>{{ user.email }}</h4>
    </div>

    <div class="item">
      <h3> Numero de Cliente</h3>
      <h4>{{ user.client }}</h4>
    </div>

    <div class="item">
      <h3> Moneda </h3>
      <h4>{{ user.profile.currency }}</h4>
    </div>

    <div class="item">
      <h3> Cambiar Password </h3>
    </div>

  </div>

</div>

<div class="information-list">
  <div class="information-group">Legal</div>


  <div class="information-group-content">
    <div class="item">
      <h3>Terminos y condiciones</h3>
    </div>

    <div class="item">
      <h3>Privacidad</h3>
    </div>

  </div>

</div>

<div class="information-list">
  <div class="information-group">Ayuda</div>

  <div class="information-group-content">
    <div class="item">
      <h3>Chat dee ayuda</h3>
    </div>

    <div class="item">
     <h3> Eliminar cuenta</h3>
    </div>

  </div>
</div>
</div>
    `;
  }
}
