export interface VendingModels {}

export interface Can {
  id: number;
  name: string;
  price: number;
  img: string;
  stock: number;
}

export interface PaymentDB {
  id: number[];
  totalStock: number;
  totalcashPayment: number[];
  totalCreditCardPayment: number[];
  sold: number;
  change: number;
}

export interface CardDetails {
  id: number;
  username: string;
  cardNumber: string;
  expMonth: any;
  expYear: any;
  cvv: string;
}