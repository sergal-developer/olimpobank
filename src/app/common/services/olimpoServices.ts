import { Storage } from "src/app/database/session.storage";
import { GlobalConstants } from "../globals/globalConstants";
import { OlimpoCore } from "./olimpoCore";

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
    //#endregion ENV

    //#region USERS
    //#endregion USERS

    //#region PROFILE
    //#endregion PROFILE

    //#region CARDS
        //#region TRANSACTIONS
        //#endregion TRANSACTIONS
    //#endregion CARDS

}