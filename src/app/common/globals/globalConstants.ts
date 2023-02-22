import { Injectable } from "@angular/core";
import { CONTEXTNAME } from "./contextNames";

@Injectable()
export class GlobalConstants {
    context = '';
    mainContext = CONTEXTNAME.GLOBAL;
    
    get currentUser() {
        const USESSION = localStorage.getItem('USESSION');
        const data = USESSION ? JSON.parse(USESSION) : null;
        if (data && !(data.expire < new Date().getTime()) || !data) {
            localStorage.removeItem('USESSION');
            return null;
        }
        return data;
     }

    set currentUser(user) {
        user.expire = new Date().setHours(1);
        localStorage.setItem('USESSION', JSON.stringify(user));
        const USESSION = localStorage.getItem('USESSION');
        console.log('USESSION: ', USESSION);
    }

    constructor() {}

    reset() {
        this.context = '';
        this.mainContext = CONTEXTNAME.GLOBAL;
        this.currentUser = null;
    }

    
}
