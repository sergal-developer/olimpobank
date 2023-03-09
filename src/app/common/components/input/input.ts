import { LitElement, html, css} from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('app-input')
export class InputComponent extends LitElement {
  @property() id: string = 'input';
  @property() title: string = '';
  @property() customClass: string = '';
  @property() disabled: boolean = false;
  @property() loading: boolean = false;
  @property() invalid: boolean = false;
  @property() value: string = '';
  @property() type: string = 'text';
  @property() tabindex: number = 0;
  @property() required: boolean = false;

  render() {
    return html`
    <div class="input 
      ${ this.customClass } 
      ${ this.disabled || this.loading ? 'disabled' : '' }
      ${ this.invalid ? 'error' : '' }
      ${ !this.value ? 'empty' : '' }">
      <div class="innerControl">
        <input id="${ this.id }"
          .type="${ this.type }"
          tabindex="${ this.tabindex }"
          ?required="${ this.required }"
          autocomplete="off"
          .value=${this.value} 
          ?disabled=${this.disabled} 
          @input=${this.handleInput} 
          > 
        <label for="${ this.id }" >${ this.title }</label>
      </div>
    </div>
    `;
  }

  handleInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    console.log('this.value: ', this.value);
    this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
  }
}
