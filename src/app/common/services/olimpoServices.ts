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

    getCards(type?: string) {
        const cards = [
            {
                id: 111, name: "Débito", description: "Tarjeta de débito básica", type: 'debit',
                commission: 0, annuity: 0, maxAmount: 0, cashback: 0, digital: false,
                front: '../../../assets/front-debito.svg',
                back: '../../../assets/back-debito.svg'
            },
            {
                id: 112, name: "Débito Atlante", description: "Tarjeta de débito empresarial", type: 'debit',
                commission: 0, annuity: 300, maxAmount: 0, cashback: 0.03, digital: true,
                front: '../../../assets/front-debito-atlante.svg',
                back: '../../../assets/back-debito-atlante.svg'
            },
            {
                id: 113, name: "Débito Hiperión", description: "Tarjeta de débito exclusiva", type: 'debit',
                commission: 0, annuity: 1000, maxAmount: 0, cashback: 0.10, digital: true,
                front: '../../../assets/front-debito-hiperion.svg',
                back: '../../../assets/back-debito-hiperion.svg'
            },
            {
                id: 211, name: "Hermes", description: "Tarjeta de crédito básica", type: 'credit',
                commission: 0, annuity: 900, maxAmount: 20000, cashback: 0, digital: true, bankInterest: 0.2,
                front: '../../../assets/front-credito-hermes.svg',
                back: '../../../assets/front-credito-hermes.svg'
            },
            {
                id: 212, name: "Apollo", description: "Tarjeta de crédito empresarial", type: 'credit',
                commission: 0, annuity: 1500, maxAmount: 100000, cashback: 0.03, digital: true, bankInterest: 0.2,
                front: '../../../assets/front-credito-apollo.svg',
                back: '../../../assets/front-credito-apollo.svg'
            },
            {
                id: 213, name: "Zeus", description: "Tarjeta de crédito exclusiva e ilimitada", type: 'credit',
                commission: 0, annuity: 3000, maxAmount: ' Sin Limite', cashback: 0.10, digital: true, bankInterest: 0.2,
                front: '../../../assets/front-credito-zeus.svg',
                back: '../../../assets/front-credito-zeus.svg'
            },
        ];

        return type ? cards.filter(x => x.type === type) : cards;
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

    //#region PROFILE
    getProfile(client: any) {
        let user = this.searchClient(client);
        if (!user.profile) {
            user.profile = {
                currency: 'MXN',
                accounts: {
                    debit: [],
                    credit: [],
                    digital: [],
                }
            };
            this.updateClient(user);
            user = this.searchClient(client);
        }
        return user;
    }
    //#endregion PROFILE

    //#region CARDS
    contractCard(card: any, client: any) {
        try {
            let user = this.getProfile(client);
            const requestCard = {
                description: card.description,
                name: card.name,
                currency: user.profile.currency,
                owner: `${user.name} ${user.lastName}`,
                ownerId: user.id,
                type: card.type,
                commission: card.commission,
                annuity: card.annuity,
                maxAmount: card.maxAmount,
                cashback: card.cashback,
                digital: card.digital,
                referenceCard: card.id
            };
            const newCard = this.oc.createCard(requestCard);

            console.log('card: ', newCard);
            if (user.profile.accounts[card.type]) {
                const linkCard = {
                    id: newCard.id,
                    account: newCard.account,
                    name: newCard.name,
                    description: newCard.description,
                    balance: newCard.balance,
                    currency: newCard.currency,
                    active: newCard.active,
                    turnedOn: newCard.turnedOn,
                    cardNumber: newCard.cardNumber
                };
                user.profile.accounts[card.type].push(linkCard);
                this.updateClient(user);
                user = this.searchClient(user);
            }

            console.log('user: ', user);
            return newCard;
        } catch (err) {
            console.log('err: ', err);
            return null;
        }

    }

    getCardDetails(cardId: string) {
        return this.oc.getCard({ id: cardId });
    }
    //#region TRANSACTIONS
    transaction(transaction: any, card: any, client: any) {
        let user = this.getProfile(client);

        return this.oc.createTransaction(transaction, card.id, user);
    }

    validateTransactions() {
        const cards = this.oc.getCards();
        console.log('cards: ', cards.content);
        const transactions: any = [];
        cards.content.forEach((card: any) => {
            card.transactions.forEach((tra: any) => {
                if (tra.status !== 'PENDING') { return; }
                transactions.push(tra);
            });
        });

        transactions.forEach((tra: any) => {
            const valid = cards.content.find((x: any) => {
                return x.cardNumber === tra.receptor || x.CLABE === tra.receptor
            });
            if (valid) {
                tra.income = !tra.income;
                tra.status = 'COMPLETED';
                return this.oc.createBatchTransaction(tra);
            }

        });

        console.log('transactions: ', transactions);
    }
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