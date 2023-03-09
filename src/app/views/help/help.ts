import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('help-view')
export class HelpView extends LitElement {
  
  render() {
    return html`
    <div class="content">

<div class="information-list">
  <div class="information-group">Funcionamientos</div>

  <div class="information-group-content">

    <div class="item">
      <h3>Cambiar contraseña</h3>
    </div>
    <div class="item">
      <h3>Actualizar Datos</h3>
    </div>
    <div class="item">
      <h3>Contratar Tarjetas</h3>
    </div>
    <div class="item">
      <h3>Tipos de tarjetas</h3>
    </div>

  </div>

</div>
<div class="information-list">
  <div class="information-group">Creditos</div>

  <div class="information-group-content">

    <div class="item">
      <h3>Fechas de corte por tarjeta</h3>
    </div>
    <div class="item">
      <h3>Que es el Cashback</h3>
    </div>
    <div class="item">
      <h3>Comisiones</h3>
    </div>

  </div>

</div>

</div>
    `;
  }
}
