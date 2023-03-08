import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('splash-view')
export class SplashView extends LitElement {
  
  render() {
    return html`
    <h1> splash </h1>
    `;
  }
}
