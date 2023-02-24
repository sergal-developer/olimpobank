import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-bankTransfer',
  templateUrl: './bankTransfer.component.html',
  styleUrls: ['./bankTransfer.component.scss']
})
export class BankTransferComponent implements OnInit {

  cardId: any = null;
  card: any = null;
  profile: any = null;
  responseMessage: string = '';
  operation: string = '';

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
        this.operation = params.operation;
        this.getCard(this.cardId);
      }
    });
  }

  getCard(cardId: string) {
    this.card = this.service.getCardDetails(cardId);
    this.profile = this.service.getProfile(this.gc.currentUser);
  }

  send() {
    this.responseMessage = '';
    const inputs = document.querySelectorAll('#transfer input');
    const transaction: any = {}
    const invalidFields = [];

    inputs.forEach((input: any) => {
      if (input.required && !input.value) {
        invalidFields.push(input);
      }
        transaction[input.id] = input.value;
    });

    if (invalidFields.length) {
      this.responseMessage = `debe de llenar los campos requeridos`;
      return;
    }

    transaction.currency = this.card.currency;
    transaction.source = 'APP';
    transaction.income = this.operation === 'transfer' ? false : true;
    transaction.issuing = this.card.CLABE;
    transaction.receptor = transaction.account;
    transaction.status = 'PENDING';
    console.log('transaction: ', transaction);

    const tra = this.service.transaction(transaction, this.card, this.gc.currentUser);
    console.log('tra: ', tra);

    this.gotoCard();

  }

  gotoCard() {
    this.router.navigate(['/app/card', this.cardId]);
  }

  configHeader() {
    setTimeout(() => {
      this.gc.headerOptions.return.show = true;
      this.gc.headerOptions.return.route = `/app/card/${ this.cardId }`;
      this.gc.headerOptions.profile.show = false;
      this.gc.headerOptions.title.show = true;
      this.gc.headerOptions.title.content = `${ this.operation === 'transfer' ? 'Enviar Dinero' : 'Pagar' }`;
      this.gc.headerOptions.lateralMenu.show = false;
    }, 200);
  }
}
