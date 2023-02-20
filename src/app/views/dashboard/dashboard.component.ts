import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'dashboard-view',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class DashboardComponent {
    title = 'olimpobank';
    listBudgets: Array<any> = [];
    balanceTotal: any;
    budgetTotal: any;
    entryTotal: any;

    startDate = new Date;
    startDateFormat: any;
    endDate = new Date;
    endDateFormat: any;
    monthsSelected: any;
    popupDate = false;

    modal = {
      showModal: false,
      title: 'Update Dates',
      showFooter: false,
      showHeader: true,
      showClose: false,
      fx: 'fx-super-scaled',
      loading: false,
      modalClass: '',
      size: 'full'
    };

    constructor() {}

    ngOnInit(): void {
      this.firstInitDates();
    }

    firstInitDates() {
      const now = new Date();
      this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      this.startDateFormat = this.startDate.toISOString().split('T')[0];
      this.endDateFormat = this.endDate.toISOString().split('T')[0];
      this.getDates();
      this.getData();
    }

    getData() {
      const query: any = { startDate: this.startDate.getTime(), endDate: this.endDate.getTime() };
      // this.listBudgets = this.API.getBudgetsFiltered(query);

      // const stadistics = this.API.getFullBalance(this.listBudgets);
      // this.balanceTotal = stadistics.totalFormat;
      // this.budgetTotal = stadistics.budgetFormat;
      // this.entryTotal = stadistics.entryFormat;
    }

    delete(budget: any) {
      // this.listBudgets = this.API.deleteBudget(budget);
      this.getData();
    }

    edit(budget: any) {
      // if (this.API.updateBudget(budget)) {
        this.getData();
      // }
    }

    updateRange() {
      this.startDate = new Date(this.startDateFormat);
      this.endDate = new Date(this.endDateFormat);
      this.startDateFormat = this.startDate.toISOString().split('T')[0];
      this.endDateFormat = this.endDate.toISOString().split('T')[0];
      
      this.getDates();
      this.getData();
      this.modal.showModal = false;
    }

    openDate() {
      this.modal.showModal = true;
    }

    onAfterAction(event?: any) {
      if (event.action === 'DELETE') {
        this.delete(event.data);
      }

      if (event.action === 'EDIT') {
        this.edit(event.data);
      }
    }

    //#region CONVERTERS
    getDates() {
      let range = '';
      if (!this.endDate) {
        // range = this.API.getMonthName(this.startDate.getMonth());
      } else if (this.endDate && this.startDate) {
        // const start = this.API.getMonthName(this.startDate.getMonth());
        // const end = this.API.getMonthName(this.endDate.getMonth());
        // range = start === end ? `${ start }` : `${ start } - ${ end }`;
      }

      this.monthsSelected = range;
    }
    //#endregion
  }
