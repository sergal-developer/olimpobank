import { Injectable } from "@angular/core";
import { OlimpoCore } from "./olimpoCore";

@Injectable({
    providedIn: 'root'
})
export class OlimpoService {

    constructor(private oc: OlimpoCore) { }

    //#region ENV
    getCurrencies() {
        return [
            { id: 123, name: "MXN", description: "Peso Mexicano" },
            { id: 13, name: "USD", description: "Dollars" },
        ];
    }

    getCurrenciesCripto() {
        return [
            { id: 123666, name: "BTS", description: "BITCOIN" },
            { id: 16663, name: "XLT", description: "STELLAR" },
            { id: 16663, name: "ETH", description: "ETHERIUM" },
        ];
    }

    getCarrierTypes() {
        return [
            { id: 34, name: "VISA", description: "Visa" },
            { id: 34, name: "MASTERCARD", description: "Master Card" },
            { id: 34, name: "AMEX", description: "American Express" },
        ];
    }

    loginClient(credentials: any) {
        const user = this.searchClient(credentials);
        if (!user) { return null; }

        if (user.password === credentials.password) {
            return true;
        } else {
            return false;
        }
    }

    searchClient(client: any) {
        return this.oc.searchClient(client);
    }

    registerClient(client: any) {
        const user = this.searchClient(client);
        if (!user) {
            this.oc.createClient(client.name, client.lastName, client.email, client.password);
            return this.searchClient(client);
        } else {
            return null; 
        }
    }

    updateClient(client: any) {
        const user = this.searchClient(client);
        if (user) {
            this.oc.updateClient(client);
            return this.searchClient(client);
        } else {
            return null; 
        }
    }
    //#endregion ENV

    //#region USERS
    //#endregion USERS

    //#region PROFILE
    //#endregion PROFILE

    //#region CARDS
        //#region TRANSACTIONS
        //#endregion TRANSACTIONS
    //#endregion CARDS

    //#region CONVERTERS
    encode(str: string) {
        return btoa(str);
    }

    decode(str: string) {
        return atob(str);
    }
    //#endregion CONVERTERS

}