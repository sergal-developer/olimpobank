import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const fnVoid = () => {};
export const _INPUT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-forward-ref
    useExisting: forwardRef( () => CheckboxComponent ),
    multi: true
};

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation : ViewEncapsulation.None,
  providers: [ _INPUT_VALUE_ACCESSOR ],
})
export class CheckboxComponent implements OnInit {

  //#region INPUT/OUTPUT
  @Input() id: String = 'checkboxControl';
  @Input() title: string = 'checkbox';
  @Input() required: Boolean = false;
  @Input() disabled: Boolean = false;
  @Input() loading: Boolean = false;
  @Input() invalid: Boolean = false;
  @Input() typeInput: String = 'checkbox';
  @Input() customClass: String = '';
  @Input() tabindex!: number;
  @Output() afterChange: EventEmitter<any> = new EventEmitter();
//#endregion

/* This value return any change call into [(ngModel)] */
protected _value: any;
get value(): any {
    return this._value;
}
set value(v: any) {
    if (v !== this._value) {
        this._value = v;
        this.onChangeCallback(v);
    }
}

private onTouchedCallback: () => void = fnVoid;
private onChangeCallback: (_: any) => void = fnVoid;

  constructor() { }

  ngOnInit() {
  }

}
