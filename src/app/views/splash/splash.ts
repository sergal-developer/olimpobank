import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { navigator } from "lit-element-router";

interface INavigation {
  route: string,
  params: object,
  query: object,
  data: object
}

@customElement('splash-view')
@navigator
export class SplashView extends LitElement {
  navigate: any;

  @property({ type: Object })
  nav!: INavigation;

  constructor() {
    super();
    console.log('Constructor called');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('Connected Callback called');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('Disconnected Callback called');
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    super.attributeChangedCallback(name, oldVal, newVal);
    console.log(`Attribute ${name} changed from ${oldVal} to ${newVal}`);
    
  }

  render() {
    console.log('this.nav:', this.nav);
    return html`
      <img src="./dist/assets/logo.svg" alt="" class="logo">
    `;
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    console.log('Updated called with changedProperties:', changedProperties);
    
  }

  firstUpdated(changedProperties: Map<string, any>) {
    super.firstUpdated(changedProperties);
    console.log('First Updated called with changedProperties:', changedProperties);
  }

  rediret() {
    console.log('render');
    setTimeout(() => {
      console.log('go to login');
      this.navigate('/login');
    }, 3000);
  }
}
