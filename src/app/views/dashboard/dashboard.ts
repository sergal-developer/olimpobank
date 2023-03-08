import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('dashboard-view')
export class DashboardView extends LitElement {
  
  render() {
    return html`
    <h1> dashboard </h1>
    `;
  }
}
