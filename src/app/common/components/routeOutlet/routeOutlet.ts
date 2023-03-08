import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { outlet } from "lit-element-router";


@customElement('route-outlet')
@outlet
export class RouteOutletComponent extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}