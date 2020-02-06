import { BasketballApiService } from "./../basketball-api.service";
import { FormsModule } from "@angular/forms";
import {Datum}  from  'src/stats';

import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild
} from "@angular/core";
import * as Chart from "chart.js";
import { HttpClientModule, HttpClient } from "@angular/common/http";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  canvas:  any;
  ctx: any;
  players = [
    { name: "Lebron" },
    { name: "Giannis" },
    { name: "Steph" },
    { name: "Luka" }
  ];

  input;
  suggestions = [];
  showStats: boolean;
  ppg;
  reb;
  ast;

  constructor(public _api: BasketballApiService, private _http: HttpClient) {}

  findPlayer(player) {
    if (player.length > 3) {
      this._http
        .get(
          `https://www.balldontlie.io/api/v1/players?season[]=2019&search=${player}`
        )
        .subscribe(response => {
          this.suggestions = response.data.filter(player => {
            return player.id <= 400;
          });
          console.log(this.suggestions);
        });

      console.log(player);
    }
  }

  getPlayer(id) {
    this._http
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${id}`
      )
      .subscribe(response => {
        console.log(response);
        this.showStats = true;
        this.ppg = response.data[0].pts;
        this.reb = response.data[0].reb;
        this.ast = response.data[0].ast;

        console.log("points",this.ppg)
        
          this.canvas = document.getElementById('myChart');
          this.ctx = this.canvas.getContext('2d');
          let myChart = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: ["Points", "Rebounds", "Assists"],
                datasets: [{
                    label: '# of Votes',
                    data: [this.ppg,this.reb,this.ast],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
              responsive: false,
              display:true
            }
          });

      })
      
  }

  





}
