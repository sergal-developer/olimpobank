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
    this.configHeader();
    this._activatedRoute.params.subscribe(params => {
      if (params.type) {
        this.type = params.type;
        this.getCards(this.type);
      }
    });
  }

  getCards(type: string) {
    this.cards = this.service.getCards(type);
  }

  contract(card: any) {
    const client = this.gc.currentUser;
    if(this.service.contractCard(card, client)){
      this.goDashboard();
    }
  
  }

  goDashboard() {
    this.router.navigate(['/app']);
  }

  configHeader() {
    setTimeout(() => {
      this.gc.headerOptions.return.show = true;
      this.gc.headerOptions.return.route = '/app';
      this.gc.headerOptions.profile.show = false;
      this.gc.headerOptions.title.show = true;
      this.gc.headerOptions.title.content = `Solicitar Tarjeta ${ this.type === 'debit' ? 'Debito': 'Credito' }`;
      this.gc.headerOptions.lateralMenu.show = false;
    }, 200);
  }
}
