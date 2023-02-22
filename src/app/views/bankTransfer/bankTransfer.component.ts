import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  responseMessage: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private service: OlimpoService,
    private gc: GlobalConstants
  ) { }

  ngOnInit() {
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
    console.log('this.cards: ', this.card);
  }

  send() {
    this.responseMessage = '';
    const inputs = document.querySelectorAll('#transfer input');
    const transfer: any = {}
    const invalidFields = [];

    inputs.forEach((input: any) => {
      if (input.required && !input.value) {
        invalidFields.push(input);
      }
        transfer[input.id] = input.value;
    });

    console.log('transfer: ', transfer);

  }

}
