import { CONTEXTNAME } from "./contextNames";

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
    }

    headerOptions = {
        return: { show: false, route: '' },
        profile: { show: false },
        title: { show: false, content: '' },
        lateralMenu: { show: false },
    }

    mainLoader = {
        content: 'Cargando...',
        show: false
    }

    constructor() { }

    reset() {
        this.context = '';
        this.mainContext = CONTEXTNAME.GLOBAL;
        this.currentUser = null;
    }

    showLoader() {
        if (this.mainLoader.show) {
            this.mainLoader.show = false;
        }
        this.mainLoader.show = true;
    }

    closeLoader() {
        this.mainLoader.show = false;
    }


}
