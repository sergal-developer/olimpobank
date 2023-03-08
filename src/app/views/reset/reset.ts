import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('reset-view')
export class ResetView extends LitElement {
  
  render() {
    return html`
    <h1> reset </h1>
    `;
  }
}
