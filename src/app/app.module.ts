import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AccountComponent } from './components/account/account.component';
import { FormsModule } from "@angular/forms";
import {VendingService } from "./services/vending-service.service"
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    AccountComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [VendingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
