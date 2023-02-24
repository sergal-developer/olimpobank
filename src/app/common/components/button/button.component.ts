import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[app-button], div[app-button], a[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
