import { LitElement, html, css} from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('button-component')
export class ButtonComponent extends LitElement {


  render() {
    return html`
    <div class="button-lit">
        <slot></slot>
    </div>
    `;
  }
}
