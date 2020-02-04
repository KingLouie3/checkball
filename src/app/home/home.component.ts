
import { BasketballApiService } from "./../basketball-api.service";
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import * as Chart from "chart.js";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

  
  constructor(public _api: BasketballApiService) {}

}