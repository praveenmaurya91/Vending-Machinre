import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PaymentDB } from '../models/vending-models';

@Injectable({
  providedIn: "root"
})
export class VendingService {
  cans = [
    {
      id: 1,
      name: "Pepsi",
      price: 4.5,
      img: "../../../assets/pepsi.png",
      stock: 10
    },
    {
      id: 2,
      name: "Pepsi Max",
      price: 4.5,
      img: "/assets/pepsi-max.png",
      stock: 10
    },

    {
      id: 3,
      name: "Pepsi Diet",
      price: 4.5,
      img: "/assets/diet-pepsi.png",
      stock: 10
    },
    {
      id: 4,
      name: "Coca Cola",
      price: 4.5,
      img: "/assets/coke.png",
      stock: 10
    },
    {
      id: 5,
      name: "7 Up",
      price: 4.5,
      img: "/assets/7up.png",
      stock: 10
    },
    {
      id: 6,
      name: "Coca Cola Zero",
      price: 4.5,
      img: "/assets/coke-zero.png",
      stock: 10
    },
    {
      id: 7,
      name: "Fanta",
      price: 4.5,
      img: "/assets/fanta.png",
      stock: 10
    },
    {
      id: 8,
      name: "Sprite",
      price: 4.5,
      img: "/assets/sprite.png",
      stock: 10
    },
    {
      id: 9,
      name: "Mountain Dew",
      price: 4.5,
      img: "/assets/mlg-mountain.png",
      stock: 10
    },
    {
      id: 10,
      name: "Solo",
      price: 4.5,
      img: "/assets/solo.png",
      stock: 10
    }
  ];

  cashOptions = [
    {
      money: 5,
      img: "/assets/dollar-5.jpg"
    },
    {
      money: 10,
      img: "/assets/dollar-10.jpg"
    },
    {
      money: 20,
      img: "/assets/dollar-20.jpg"
    },
    {
      money: 50,
      img: "/assets/dollar-50.jpg"
    },
    {
      money: 100,
      img: "/assets/dollar-100.jpg"
    }
  ];

  paymentDB = <PaymentDB>{
    id: [],
    totalStock:0,
    totalcashPayment: [],
    totalCreditCardPayment: [],
    sold: 0,
    change: 0
  };

  private cansDataSource = new BehaviorSubject(this.cans);
  cansData = this.cansDataSource.asObservable();

  private cashDataSource = new BehaviorSubject(this.cashOptions);
  cashData = this.cashDataSource.asObservable();

  private accountDataSource = new BehaviorSubject(this.paymentDB);
  accountData = this.accountDataSource.asObservable();

  constructor() {}

  getCansService() {
    return this.cansData;
  }

  cashService() {
    return this.cashData;
  }
  getAccountService() {
    return this.accountData;
  }

  updateAccountService(accountData: PaymentDB) {
    return this.accountDataSource.next(accountData);
  }
}

