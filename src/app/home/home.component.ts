import { BasketballApiService } from "./../basketball-api.service";
import { FormsModule } from "@angular/forms";
import { Datum } from "src/stats";

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
  show: boolean = true;
  canvas: any;
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
  games_played;
  min;
  fgm;
  fga;
  fg3m;
  fg3a;
  ftm;
  fta;
  oreb;
  dreb;
  stl;
  blk;
  pf;
  fg_pct;
  fg3_pct;
  ft_pct;
  turnover;
  first_name;
  last_name;

  constructor(public _api: BasketballApiService, private _http: HttpClient) {}

  findPlayer(player) {
    if (player.length > 3) {
      this._http
        .get(
          `https://www.balldontlie.io/api/v1/players?season[]=2019&search=${player}`
        )
        .subscribe(response => {
          this.first_name =  response.data.first_name;
          this.suggestions = response.data.filter(player => {
            
            return player.id <= 400;
          });
          console.log('lets see', response);
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
        this.games_played = response.data[0].games_played;
        this.oreb = response.data[0].oreb;
        this.reb = response.data[0].dreb;
        this.fgm = response.data[0].fgm;
        this.fga = response.data[0].fga;
        this.fg_pct = response.data[0].fg_pct;
        this.fg3m = response.data[0].fg3m;
        this.fg3a = response.data[0].fg3a;
        this.fg3_pct = response.data[0].fg3_pct;
        this.ftm = response.data[0].ftm;
        this.fta = response.data[0].fta;
        this.ft_pct = response.data[0].ft_pct;
        this.stl = response.data[0].stl;
        this.pf = response.data[0].pf;
        this.min = response.data[0].min;

        this.turnover = response.data[0].turnover;
        console.log("points", this.ppg);
        console.log("games", this.games_played);

        this.canvas = document.getElementById("myChart");
        this.ctx = this.canvas.getContext("2d");
        let myChart = new Chart(this.ctx, {
          type: "line",
          data: {
            labels: ["Points", "Rebounds", "Assists"],
            datasets: [
              {
                label: "# of Votes",
                data: [this.ppg, this.reb, this.ast],
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
            display: true
          }
        });
      });
  }

  clearSearch(input) {
    if (input == "") {
      return (this.show = false);
    }
  }
}
