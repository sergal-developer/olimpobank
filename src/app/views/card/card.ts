import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('card-view')
export class CardView extends LitElement {
  
  render() {
    return html`
    <div class="content">
  <div class="card-details-main">

    <div class="card-details">
      <div class="functionsCard">
        <div class="buttonIcon" (click)="enableDisableCard()">
          <i class="fa-solid fa-toggle-off"></i>
          <span *ngIf="card.active">Apagar</span>
          <span *ngIf="!card.active">Prender</span>
        </div>
      </div>

      <div class="accountCard {{ card.name }} full" (click)="detailsCard()">
        <div class="card-resume">
          <div *ngIf="referenceCard" class="referenceCard" [ngClass]="{'showCard': showReferenceCard }">
            <img [attr.src]="referenceCard.front" alt="">

            <div class="referenceCardInner">
              <div class="card-header">
                <div class="card-header-name">
                  <h3>{{ card.name }}</h3>
                  <h5 class="emphasis">{{ card._cardNumber }}</h5>
                </div>
                <div class="card-header-status">
                  <div class="label-status">
                    <span *ngIf="card.active">ACTIVA</span>
                    <span *ngIf="!card.active">INACTIVA</span>
                  </div>
                </div>
              </div>

              <div class="expire">
                <div>VALIDA HASTA</div>
                <div class="value">{{ card.expirationMonth }}/{{ card.expirationYear }}</div>
              </div>
              <div class="CVC">
                <div>CVC</div>
                <div class="value">{{ card.cvc }}</div>
              </div>
              <div class="owner">{{ card.owner }}</div>
            </div>
            

          </div>
          
        </div>

        
      </div>


      <div class="functionsCard">
        <div class="buttonIcon" (click)="createDigitalCard()" >
          <i class="fa-regular fa-credit-card"></i>
          <span >Tarjeta Digital</span>
        </div>
      </div>

    </div>
    <div class="card-balance-total">
      <div>{{ card._balance }} {{ card.currency }}</div>
    </div>


    <div class="card-operations">
      <button app-button class="link" (click)="transfer()">Enviar</button>
      <button app-button class="link" (click)="payments()">Pagar</button>
    </div>


    <h2>Transacciones</h2>
    <hr class="my-4">
    <div class="card-transactions">
      <div class="transaction" *ngFor="let item of card.transactions" [ngClass]="{'income': item.income, 'budget': !item.income}">
        <div>{{ item._date }}</div>
        <div>{{ item.concept }}</div>
        <div>{{ item._amount }} {{ item.currency }}</div>
      </div>
    </div>
  </div>
</div>
    `;
  }
}
