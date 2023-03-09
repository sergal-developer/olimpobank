import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('notification-view')
export class NotificationView extends LitElement {
  
  render() {
    return html`
    <div class="content">

<div class="information-list">
  <div class="information-group">23 FEB 2024</div>

  <div class="information-group-content">

    <div class="item">
      <h4>Actualización de contraseña</h4>
    </div>
    <div class="item">
      <h4>Actualización de contraseña</h4>
    </div>
    <div class="item">
      <h4>Tarjeta "Debito" contratada</h4>
    </div>
    <div class="item">
      <h4>Tarjeta "Hermes" contratada</h4>
    </div>

  </div>

</div>
<div class="information-list">
  <div class="information-group">22 FEB 2024</div>

  <div class="information-group-content">

    <div class="item">
      <h4>Actualización de contraseña</h4>
    </div>
    <div class="item">
      <h4>Actualización de contraseña</h4>
    </div>
    <div class="item">
      <h4>Tarjeta "Debito" contratada</h4>
    </div>
    <div class="item">
      <h4>Tarjeta "Hermes" contratada</h4>
    </div>

  </div>

</div>
<div class="information-list">
  <div class="information-group">20 FEB 2024</div>

  <div class="information-group-content">

    <div class="item">
      <h4>Actualización de contraseña</h4>
    </div>
    <div class="item">
      <h4>Actualización de contraseña</h4>
    </div>
    <div class="item">
      <h4>Tarjeta "Debito" contratada</h4>
    </div>
    <div class="item">
      <h4>Tarjeta "Hermes" contratada</h4>
    </div>

  </div>

</div>

</div>
    `;
  }
}
