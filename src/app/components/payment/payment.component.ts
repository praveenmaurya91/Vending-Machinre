import { Component, OnInit } from "@angular/core";
import { VendingService } from "src/app/services/vending-service.service";
import * as _ from "lodash";
import { PaymentDB, Can, CardDetails } from "src/app/models/vending-models";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  cashData = [];
  cans = [];

  can = <Can>{
    id: 0,
    name: "",
    price: 0,
    img: "",
    stock: 0
  };

  cardDetails = <CardDetails>{
    username: "",
    cardNumber: "",
    expMonth: 0,
    expYear: 0,
    cvv: ""
  };

  emptyCardDetails = <CardDetails>{
    username: "",
    cardNumber: "",
    expMonth: 0,
    expYear: 0,
    cvv: ""
  };

  paymentDB = <PaymentDB>{
    id: [],
    totalStock: 0,
    totalcashPayment: [],
    totalCreditCardPayment: [],
    sold: 0,
    change: 0
  };

  canSelected: boolean = false;
  cashPaymentSelected: boolean = false;
  cardPaymentSelected: boolean = false;
  cardPaymentSuccess: boolean = false;
  outOfStock: boolean = false;

  constructor(private vendingService: VendingService) {}

  ngOnInit() {
    this.getCans();
    this.getCash();
  }

  /** This method will get the data of Cash from Vending Service */
  getCash() {
    this.vendingService
      .cashService()
      .subscribe(cashData => (this.cashData = cashData));
  }

  /** This method will get the data of Cans from Vending Service and update the can data */
  getCans() {
    let stockArray = [];
    this.vendingService.getCansService().subscribe(canData => {
      this.cans = canData;
      canData.forEach(cans => {
        stockArray.push(cans.stock);
      });
    });
    this.paymentDB.totalStock = _.sum(stockArray);
    this.vendingService.updateAccountService(this.paymentDB);
  }

  /** this method will react on change event */
  canChange(i) {
    this.canSelected = true;
    this.can = this.cans[i];
  }

  /** This method will run on click event */
  cashPayment() {
    this.cashPaymentSelected = true;
    this.cardPaymentSelected = false;
  }

  /** This method will run on click event */
  cardPayment() {
    this.cardPaymentSelected = true;
    this.cashPaymentSelected = false;
  }

  /** This method will run on cash payment*/
  cashSubmit(index) {
    this.paymentDB.id.push(this.cans[index].id);
    this.paymentDB.sold = this.paymentDB.sold + 1;
    this.paymentDB.totalcashPayment.push(this.cans[index].price);
    this.paymentDB.change = this.cashData[index].money - this.cans[index].price;
    this.can.stock = this.can.stock - 1;
    this.paymentDB.totalStock = this.paymentDB.totalStock - 1;
    this.vendingService.updateAccountService(this.paymentDB);
  }

  /** This method will run on card payment*/
  cardSubmit(id) {
    this.paymentDB.sold = this.paymentDB.sold + 1;
    this.paymentDB.totalCreditCardPayment.push(this.cans[id].price);
    this.can.stock = this.can.stock - 1;
    this.paymentDB.totalStock = this.paymentDB.totalStock - 1;
    this.vendingService.updateAccountService(this.paymentDB);
    this.cardPaymentSuccess = true;
    this.cardDetails = this.emptyCardDetails;
  }
}
