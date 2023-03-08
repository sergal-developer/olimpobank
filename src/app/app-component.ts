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
  navigation: any = {};

  @property()
  route: string  = '';
  @property()
  params: any = {};
  @property()
  query: any = {};

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

    console.log(this.navigation);
  }

  render() {
    return html`
      <ul>
        ${AppComponent.mainRoutes?.map((route: any) => html`
            <app-link href="${route.pattern}"> ${route.name} </app-link>`
        )}
      </ul>

      <route-outlet active-route=${this.route}>
        <splash-view route='splash'></splash-view>
        <login-view route='login'></login-view>
        <register-view route='register'></register-view>
        <reset-view route='reset'></reset-view>

        <dashboard-view route='app'></dashboard-view>
        <profile-view route='app-profile'></profile-view>
        <notification-view route='app-notification'></notification-view>
        <help-view route='app-help'></help-view>
        <request-type-view route='app-request-type'></request-type-view>
        <card-view route='app-card'></card-view>
        <card-operation-view route='app-card-operation'></card-operation-view>

        <not-found-view route='not-found'></not-found-view>

         <div>
            <h1>${ JSON.stringify(this.route)}</h1>
            <span> ${ JSON.stringify(this.params)} </span> <br>
            <span> ${ JSON.stringify(this.query)} </span> <br>
         </div>

      </route-outlet>
    `;
  }
}
