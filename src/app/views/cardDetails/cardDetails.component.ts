import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-cardDetails',
  templateUrl: './cardDetails.component.html',
  styleUrls: ['./cardDetails.component.scss']
})
export class CardDetailsComponent implements OnInit {

  cardId: any = null;
  card: any = null;

  constructor(
    private router: Router,
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

  transfer() {
    this.router.navigate(['/card', this.card.id, 'transfer']);
  }

  payments() {
    this.router.navigate(['/card', this.card.id, 'pay']);
  }

}
