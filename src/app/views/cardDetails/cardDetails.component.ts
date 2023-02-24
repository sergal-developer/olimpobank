import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { HelperTransform } from 'src/app/common/helpers/helpersTrasnform';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-cardDetails',
  templateUrl: './cardDetails.component.html',
  styleUrls: ['./cardDetails.component.scss']
})
export class CardDetailsComponent implements OnInit {

  cardId: any = null;
  card: any = null;
  showReferenceCard = false;
  referenceCard: any = null;
  
  _helperTransform = new HelperTransform();

  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private service: OlimpoService,
    private gc: GlobalConstants
  ) { }

  ngOnInit() {
    this.configHeader();
    this._activatedRoute.params.subscribe(params => {
      console.log('params: ', params);
      if (params.id) {
        this.cardId = params.id;
        this.getCard(this.cardId);
      }
    });
  }

  getCard(cardId: string) {
    this.card = this.service.getCardDetails(cardId);
    const baseCards = this.service.getCards();
    const referenceCard = baseCards.filter(x => x.id === this.card.referenceCard);
    this.referenceCard = referenceCard.length ? referenceCard[0] : null;

    console.log('this.cards: ', this.card);
    this.convertItems(this.card);
  }

  transfer() {
    this.router.navigate(['/app/card', this.card.id, 'transfer']);
  }

  payments() {
    this.router.navigate(['/app/card', this.card.id, 'pay']);
  }

  enableDisableCard() {}

  createDigitalCard() {}

  detailsCard() {
    this.showReferenceCard = !this.showReferenceCard;
  }

  convertItems(card: any) {
    card._balance = this._helperTransform.toMoney(card.balance);
    card._cardNumber = this._helperTransform.formatCardNumber(card.cardNumber);
    card._CLABE = this._helperTransform.formatCardNumber(card.CLABE);

    card.transactions.forEach((t: any) => {
      t._amount = this._helperTransform.toMoney(t.amount);
      t._date = this._helperTransform.toDate(t.date);
    });
  }

  configHeader() {
    setTimeout(() => {
      this.gc.headerOptions.return.show = true;
      this.gc.headerOptions.return.route = '/app';
      this.gc.headerOptions.profile.show = false;
      this.gc.headerOptions.title.show = true;
      this.gc.headerOptions.title.content = `Tarjeta ${ this.card.name }`;
      this.gc.headerOptions.lateralMenu.show = false;
    }, 200);
  }
}
