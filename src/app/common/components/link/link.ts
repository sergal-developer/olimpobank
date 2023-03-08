import { LitElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";
import { customElement, property } from 'lit/decorators.js';


@customElement('app-link')
@navigator
export class LinkComponent extends LitElement {
  navigate: any;

  @property()
  href: string = '';

 static styles = css` a {margin: 5px;} `;
  
  render() {
    return html`
      <a href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
  }

  linkClick(event: any) {
    event.preventDefault();
    this.navigate(this.href);
  }
}