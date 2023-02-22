import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-cardRequest',
  templateUrl: './cardRequest.component.html',
  styleUrls: ['./cardRequest.component.scss']
})
export class CardRequestComponent implements OnInit {

  type: any = null;
  cards: any = [];

  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private service: OlimpoService,
    private gc: GlobalConstants
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log('type: ', params);
      if (params.type) {
        this.type = params.type;
        this.getCards(this.type);
      }
    });
  }

  getCards(type: string) {
    this.cards = this.service.getCards(type);
    console.log('this.cards: ', this.cards);
  }

  contract(card: any) {
    const client = this.gc.currentUser;
    if(this.service.contractCard(card, client)){
      this.goDashboard();
    }
  
  }

  goDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
