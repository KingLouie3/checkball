import { ChartsModule } from 'ng2-charts';
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

  chartOptions = {
    responsive: true
  };

  chartData  = [];
  //  = 
  
  // [
  //   { data: [this._api.players[0].pts], label: 'Giannis'},
  //   { data: [120, 455, 100, 340], label: 'Account B' },
  //   { data: [45, 67, 800, 500], label: 'Account C' }
  // ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  } 
constructor(public _api: BasketballApiService, private route: Router) {}

canvas: any;
ctx: any;

seeStats() {
  this.route.navigate(['']);
}
  

  ngOnInit() {
    console.log("Data", this.chartData)
    console.log('test', this._api.players[0].pts)
    
    }


  
  }

