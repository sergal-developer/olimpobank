import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('dashboard-view')
export class DashboardView extends LitElement {
  
  render() {
    return html`
    <div class="content">
  <div class="accounts" *ngIf="user.profile">
    <div class="accountsTitle">
      <div>Cuentas en Efectivo</div>

      <div>
        <div class="accountRequest" (click)="requestCard('debit')" *ngIf="user.profile.accounts.debit.length">
          <button app-button class="circular"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>

    </div>

    <div class="accountsList">
    
      <div class="accountRequest" (click)="requestCard('debit')" *ngIf="!user.profile.accounts.debit.length">
        <button app-button class="circular"><i class="fa-solid fa-plus"></i></button>
        <div class="link">Solicitar tarjeta</div>
      </div>

      <div class="accountCard {{ account.name }}" *ngFor="let account of user.profile.accounts.debit">
        <div class="card-resume" (click)="detailsCard(account)">
          <div class="card-header">
            <div class="card-header-name">
              <h3>{{ account.name }}</h3>
              <h5 class="emphasis">{{ account._cardNumber }}</h5>
            </div>
            <div class="card-header-status">
              <div class="label-status">
                <span *ngIf="account.active">ACTIVE</span>
                <span *ngIf="!account.active">INACTIVE</span>
              </div>
            </div>
          </div>
          <div class="card-content">
            <div class="card-content-balance">{{ account._balance }} {{ account.currency }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="accounts">
    <div class="accountsTitle">
      <div>Cuentas de Credito</div>

      <div>
        <div class="accountRequest" (click)="requestCard('credit')" *ngIf="user.profile.accounts.credit.length">
          <button app-button class="circular"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    
    </div>

    <div class="accountsList">

      <div class="accountRequest" (click)="requestCard('credit')" *ngIf="!user.profile.accounts.credit.length">
        <button app-button class="circular"><i class="fa-solid fa-plus"></i></button>
        <div class="link">Solicitar tarjeta</div>
      </div>

      <div class="accountCard {{ account.name }}" *ngFor="let account of user.profile.accounts.credit">
        <div class="card-resume" (click)="detailsCard(account)">
          <div class="card-header">
            <div class="card-header-name">
              <h3>{{ account.name }}</h3>
              <h5 class="emphasis">{{ account._cardNumber }}</h5>
            </div>
            <div class="card-header-status">
              <div class="label-status">
                <span *ngIf="account.active">ACTIVE</span>
                <span *ngIf="!account.active">INACTIVE</span>
              </div>
            </div>
          </div>
          <div class="card-content">
            <div class="card-content-balance">{{ account._balance }} {{ account.currency }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
    `;
  }
}
