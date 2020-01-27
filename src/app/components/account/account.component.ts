import { reduce } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { VendingService } from "src/app/services/vending-service.service";
import * as _ from "lodash";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  moneyInMachine: any;
  creditCardAmount: any;
  sold: any;
  totalCans: any;
  constructor(private vendingService: VendingService) {}

  ngOnInit() {
    this.getAccountData();
  }

  /**This method is used to get the data from Account Service and pass it to the variables*/
  getAccountData() {
    this.vendingService.getAccountService().subscribe(data => {
      this.moneyInMachine = _.sum(data.totalcashPayment);
      this.creditCardAmount = _.sum(data.totalCreditCardPayment);
      this.sold = data.sold;
      this.totalCans = data.totalStock;
    });
  }
}
