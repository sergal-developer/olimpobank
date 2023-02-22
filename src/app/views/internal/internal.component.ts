import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/globals/globalConstants';
import { OlimpoService } from 'src/app/common/services/olimpoServices';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss']
})
export class InternalComponent implements OnInit {

  constructor(
    private service: OlimpoService,
    private gc: GlobalConstants
  ) { }

  ngOnInit() {
  }

  validateTransactions() {
    this.service.validateTransactions();
  }

}
