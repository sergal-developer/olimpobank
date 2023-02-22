import { Injectable } from "@angular/core";
import { Storage } from "src/app/database/session.storage";
import { GlobalConstants } from "../globals/globalConstants";

@Injectable({
    providedIn: 'root'
})
export class OlimpoCore {
    dataName = "DATA";
    db = new Storage();

    constructor(private _gc: GlobalConstants) { }

    private configStorage(context?: string) {
        context = context || this._gc.context;
        this.db = new Storage(context);
    }

    private getStorage(context: string) {
        this.configStorage(context);
        let db = this.db.get();
        if (!db) {
            db = {
                name: context,
            };
        }
        return db;
    }

    private saveStorage(data: any, context: string, attribute?: string) {
        let db = this.getStorage(context);
        try {
            if (attribute) {
                db[attribute] = data;
            } else {
                db = data;
            }
            this.db.save(db, context);
            return this.getStorage(context);
        } catch (error) {
            console.warn("ERROR saveStorage: ", error);
            return null;
        }
    }

    //#region CRUD
    private searchTable(data: any, table: string, container: string, keySearch = 'id') {
        let storage = this.getStorage(table);
        console.log('storage: ', storage);
        const id = data[keySearch];
        if (!id) {
            console.log(`the record no contains ${keySearch}`);
            return null;
        }
        try {
            storage[container] = storage[container] || [];
            return storage[container].filter((x: any) => { return x[keySearch] === id })[0];
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }

    private createTable(data: any, table: string) {
        let storage = this.getStorage(table);
        const keys = Object.keys(data);
        try {
            keys.forEach(key => {
                storage[key] = data[key];
            });
            storage = this.saveStorage(storage, table);
            return storage;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }

    private updateTable(data: any, table: string, container: string) {
        let storage = this.getStorage(table);
        const keys = Object.keys(data);
        try {
            storage[container] = storage[container] || {};
            keys.forEach(key => {
                storage[container][key] = data[key];
            });
            storage = this.saveStorage(storage, table);
            return storage;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }

    private searchUpdateTable(data: any, table: string, container: string, keySearch = 'id') {
        let storage = this.getStorage(table);
        const keys = Object.keys(data);
        const id = data[keySearch];
        if (!id) {
            console.log(`the record no contains ${keySearch}`);
            return null;
        }

        try {
            storage[container] = storage[container] || {};
            const filtered = storage[container].filter((x: any) => { return x[keySearch] === id });
            if (!filtered.length) { return null }
            keys.forEach(key => {
                filtered[0][key] = data[key];
            });
            storage = this.saveStorage(storage, table);
            return storage;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    //#endregion CRUD

    //#region CONVERTERS
    uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    //#endregion CONVERTERS

    //#region GENERATORS
    createPattern(pattern: string, rule = /[x]/g, replace = 'x', onlyNumbers = true) {
        return pattern.replace(rule, (c) => {
            var r = (Math.random() * 10) | 0,
                v = c == replace ? r : (r & 0x3) | 0x8;
            return onlyNumbers ? v.toString(10) : v.toString(16);
        });
    }
    //#endregion GENERATORS

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

    //#region CLIENTS
    tableClient = "CLIENTS";

    getClients() {
        const data = this.getStorage(this.tableClient);
        return data || null;
    }

    searchClient(credentials: any) {
        const client = this.searchTable(credentials, this.tableClient, 'clients', 'client');
        const email = this.searchTable(credentials, this.tableClient, 'clients', 'email');
        if (client || email) {
            return client || email;
        } else {
            return null;
        }
    }

    createClient(name: string, lastName: string, email: string, password: string) {
        const table = this.getClients();
        const user = {
                id: this.uuidv4(),
                client: this.createPattern('xxxxxxx'),
                name: name,
                lastName: lastName,
                email: email,
                password: password,
                active: true,
        };

        if(!table.clients || !table.clients.length) {
            table.clients = [];
        }

        table.clients.push(user);
        return this.createTable(table, this.tableClient);
    }

    updateClient(user: any) {
        return this.searchUpdateTable(user, this.tableClient, 'clients', 'id');
    }
    //#endregion USERS

    //#region USERS
    tableUser = "USERSESSION";

    getUserSession() {
        const data = this.getStorage(this.tableUser);
        if (data && (data.expire > new Date().getTime()) || !data) {
            return null;
        }

        return data;
    }

    createUserSession(user: any) {
        user.expire = new Date().setHours(1);
        return this.createTable(user, this.tableUser);
    }
    //#endregion USERS


    //#region PROFILE
    tableProfile = "PROFILE";
    getProfile() {
        const data = this.getStorage(this.tableProfile);
        return data.content || null;
    }

    createProfile() {
        const user = this.getUserSession();
        const data = this.getStorage(this.tableProfile);
        data.content = {
            userId: user.id,
            currency: 'MXN',
            client: user.client,
            accounts: {
                cash: [],
                credit: [],
                digital: [],
            }
        }
        return this.createTable(data, this.tableProfile);
    }

    updateProfile(data: any) {
        return this.updateTable(data, this.tableProfile, 'content');
    }
    //#endregion PROFILE

    //#region CARDS
    tableCard = "CARDS";
    getCards() {
        const data = this.getStorage(this.tableCard);
        return data || null;
    }

    getCard(data: any) {
        return this.searchTable(data, this.tableCard, 'content', 'id');
    }

    createCard(data: any) {
        const cards = this.getCards();
        if (!cards.content) {
            cards.content = [];
        }
        const card = {
            id: this.uuidv4(),
            account: this.createPattern('xxxxxx'),
            name: data.description,
            balance: 0,
            currency: data.currency,
            active: true,
            turnedOn: true,
            cardNumber: this.createPattern('xxxxxxxxxxxxxxxx'),
            CLABE: this.createPattern('xxxxxxxxxxxxxxxxxx'),
            expirationMonth: this.createPattern('x'),
            expirationYear: this.createPattern('202x'),
            cvc: this.createPattern('xxx'),
            owner: data.owner,
            type: data.type,
            commission: data.commission,
            annuity: data.annuity,
            maxAmount: data.maxAmount,
            cashback: data.cashback,
            digital: data.digital,
            transactions: []
        }
        cards.content.push(card);
        this.createTable(cards, this.tableCard);
        return this.getCard(card);
    }

    updateCard(data: any) {
        return this.searchUpdateTable(data, this.tableCard, 'content', 'id');
    }

    //#region TRANSACTIONS
    createTransaction(data: any, idcard: string) {
        const transaction = {
            id: this.uuidv4(),
            amount: data.amount,
            currency: data.currency,
            date: new Date().getTime(),
            source: data.source,
            income: data.income,
            emiter: data.emiter,
            receptor: data.receptor
        }

        // update data 
        const card = this.getCard({ id: idcard });
        if (!card) {
            console.log('no exist data in card')
        }

        // update balance
        if (data.income) {
            card.transactions.push(transaction);
            card.balance += data.amount;
            console.log('card.balance ', card.balance)
        } else {
            const diference = card.balance - data.amount;
            console.log('diference', diference)
            if (diference >= 0) {
                card.balance = diference;
                card.transactions.push(transaction);
            }
        }

        return this.updateCard(card);
    }
    //#endregion TRANSACTIONS
    //#endregion CARDS

}