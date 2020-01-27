import { Component, OnInit } from "@angular/core";
import { VendingService } from "src/app/services/vending-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  cans = []

  constructor(private canService: VendingService) {}

  ngOnInit() {
   this.canService.getCansService().subscribe(canData => (this.cans = canData));
  }
}

