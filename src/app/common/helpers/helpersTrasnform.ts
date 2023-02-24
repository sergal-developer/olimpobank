import { CurrencyPipe, DatePipe } from '@angular/common';

export class HelperTransform {
    private _currencyPipe: CurrencyPipe;
    private _datePipe: DatePipe;

    constructor() {
        this._currencyPipe = new CurrencyPipe('en-US');
        this._datePipe = new DatePipe('en-US');
    }

    toDate(value: Date, format = 'MM/d/yyyy') {
        const result = this._datePipe.transform(value, format);
        return result;
    }

    toDateUTC(value: Date, format = 'MM/d/yyyy') {
        const result = this._datePipe.transform(value, format, 'UTC');
        return result;
    }

    toMoney(value: number | string) {
        const result = this._currencyPipe.transform(value);
        return result;
    }

    milisecondsToDate(miliseconds: number) {
        try {
            const result = new Date(miliseconds);
            return result;
        } catch (error) {
            return null;
        }
    }

    maskCardNumber(number: any) {
        number = number.slice(number.length - 4, number.length);
        return `**** ${number}`;
    }

    formatCardNumber(number: string, limit = 4) {
        const result: any = [];
        let counter = 0;
        number.split('').forEach(x => {
            if (counter === limit) {
                counter = 0;
                result.push(' ');
            }
            counter++;
            result.push(x)
        });
        return result.join('')
    }
}