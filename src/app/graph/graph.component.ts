import { RouterModule, Router } from "@angular/router";
import { BasketballApiService } from "./../basketball-api.service";
import { Component, OnInit } from "@angular/core";
import * as Chart from "chart.js";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"]
})
export class GraphComponent implements OnInit {
constructor(public _api: BasketballApiService) {}

canvas: any;
ctx: any;


  

  ngOnInit() {
    this.canvas = document.getElementById("myChart");
    this.ctx = this.canvas.getContext("2d");
    let myChart = new Chart(this.ctx, {
      type: "polarArea",
      data: {
        labels: ["Points", "Rebounds", "Assists"],
        datasets: [
          {
            label: "Season Averages",
            data: [this._api.ppg, this._api.reb, this._api.ast],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: false,
      }
    });
  }
}
