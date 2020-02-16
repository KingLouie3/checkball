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

  chartData  = 
  
  [
   
  ];

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
    this._api.players.forEach(element => {
      console.log('elements',element);
      const Data = {data: [element.pts, element.reb, element.ast, element.stl], label: element.first_name}
      this.chartData.unshift(Data);
    });
    // const Data = {data:[ this._api.players.pts], label: 'Test'}
    // this.chartData.push(Data)
    console.log("ChartData", this.chartData)
    console.log('graphComponentTest', this._api.players)
    
    }


  
  }

