import { Injectable } from "@angular/core";
import { CONTEXTNAME } from "./contextNames";

@Injectable()
export class GlobalConstants {
    context = '';
    mainContext = CONTEXTNAME.GLOBAL;
    currentUser: any = null;

    constructor() {}

    reset() {
        this.context = '';
        this.mainContext = CONTEXTNAME.GLOBAL;
        this.currentUser = null;
    }
}
