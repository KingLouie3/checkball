import { AfterViewInit } from '@angular/core';
import { BasketballApiService } from './basketball-api.service';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  search: any;
  stats;
  chart  =  [];
  constructor(public _api: BasketballApiService)  {}
  title = 'angular8chartjs';
  chartType: any = "polarArea";
  canvas: any;
  ctx: any;
   values =  [5,1, 11];
  

  // getPlayers()  {
  //   this._api.searchPlayers()
  //   .subscribe(
  //     response =>  {
  //     console.log(response.data);
  //     this.players = response.data
  //     console.log(this.players)
  //     }
  //   )
  // }
  // getStats(playerId: any){
  //   this._api.getPlayerStats(playerId)
  //   .subscribe(
  //     response =>  {
  //       this.stats =  response.data[0]
  //       console.log(this.stats.data[0])
  //     }
  //   )
  // }




  

  // ngOnInit() {
    
  //   this._api.statCheck()
  //   .subscribe(
  //     response => {
  //       let points = response.data[0].pts;
  //       let rebounds = response.data[0].reb;
  //       let assits = response.data[0].ast;

  //      this.stats = [points, rebounds,  assits]

      
  //     this.canvas = document.getElementById('myChart');
  //     this.ctx = this.canvas.getContext('2d');
  //     let myChart = new Chart(this.ctx, {
  //       type: this.chartType,
  //       data: {
  //           labels: ["Points", "Rebound", "Assists"],
  //           datasets: [{
  //               label: 'Lebron  Stats',
  //               data: this.stats,
  //               backgroundColor: [
  //                   'rgba(255, 99, 132, 1)',
  //                   'rgba(54, 162, 235, 1)',
  //                   'rgba(255, 206, 86, 1)'
  //               ],
  //               borderWidth: 1
  //           }]
  //       },
  //       options: {
  //         responsive: false,
  //         display:true
  //       }
  //     });


    


    
  // }
  // )
    

  // }
  

}
  
  
  

