import { LitElement, html, css} from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('input-component')
export class InputComponent extends LitElement {
  render() {
    return html`
    <div class="input-lit">
        <slot></slot>
    </div>
    `;
  }
}
