import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { router } from 'lit-element-router';

// VIEWS
import './views/card/card';
import './views/cardOperation/cardOperation';
import './views/dashboard/dashboard';
import './views/help/help';
import './views/login/login';
import './views/notFound/notFound';
import './views/notification/notification';
import './views/profile/profile';
import './views/register/register';
import './views/request/request';
import './views/reset/reset';
import './views/splash/splash';

// COMPONENTS
import './common/components/link/link';
import './common/components/routeOutlet/routeOutlet';

var base: any;

@customElement('app-component')
@router
export class AppComponent extends LitElement {
  
  @property()
  navigation: any = {};

  @property({ type: String })
  route: string = '';

  @property({ type: Object })
  params: any = {};

  @property({ type: Object })
  query: any = {};

  constructor() {
    super();
  }

  static mainRoutes = [
    { name: 'splash', pattern: '' },
    { name: 'login', pattern: 'login' },
    { name: 'register', pattern: 'register' },
    { name: 'reset', pattern: 'reset' },
    { name: 'verification', pattern: 'verification' },
    
    { name: 'app', pattern: 'app' },
    { name: 'app-profile', pattern: 'app/profile' },
    { name: 'app-notification', pattern: 'app/notification' },
    { name: 'app-help', pattern: 'app/help' },
    { name: 'app-request-type', pattern: 'app/request/:type' },
    { name: 'app-card', pattern: 'app/card/:id' },
    { name: 'app-card-operation', pattern: 'app/card/:id/:operation' },

    { name: 'legal', pattern: 'legal/:module' },
    { name: 'ux', pattern: 'ux' },

    { name: 'not-found', pattern: '*' }
  ];;

  static get routes() {
    return AppComponent.mainRoutes;
  };

  router(route: string, params: any, query: any, data: any) {
    this.route = route;
    this.params = params;
    this.query = query;

    this.navigation = {
      route: route,
      params: params,
      query: query,
      data: data
    }

    console.log('navigation', this.navigation);
  }

  render() {
    return html`
      <ul>
        ${AppComponent.mainRoutes?.map((route: any) => html`
            <app-link href="${route.pattern}"> ${route.name} </app-link>`
        )}
      </ul>

      <route-outlet active-route=${this.route}>
        ${ this.route === 'splash' ? html`<splash-view nav="${this.navigation}"></splash-view>` : html`` }

        ${ this.route === 'login' ? html`<login-view></login-view>` : html`` }
        ${ this.route === 'register' ? html`<register-view></register-view>` : html`` }
        ${ this.route === 'reset' ? html`<reset-view></reset-view>` : html`` }

        ${ this.route === 'app' ? html`<dashboard-view></dashboard-view>` : html`` }
        ${ this.route === 'app-profile' ? html`<profile-view></profile-view>` : html`` }
        ${ this.route === 'app-notification' ? html`<notification-view></notification-view>` : html`` }
        ${ this.route === 'app-help' ? html`<help-view></help-view>` : html`` }
        ${ this.route === 'app-request-type' ? html`<request-type-view></request-type-view>` : html`` }
        ${ this.route === 'app-card' ? html`<card-view></card-view>` : html`` }
        ${ this.route === 'app-card-operation' ? html`<card-operation-view></card-operation-view>` : html`` }

        ${ this.route === 'not-found' ? html`<not-found-view></not-found-view>` : html`` }

         <!-- <div>
            <h1>${ JSON.stringify(this.route)}</h1>
            <span> ${ JSON.stringify(this.params)} </span> <br>
            <span> ${ JSON.stringify(this.query)} </span> <br>
         </div> -->

      </route-outlet>
    `;
  }
}
