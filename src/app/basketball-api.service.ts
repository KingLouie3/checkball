import { Router } from "@angular/router";
import { Injectable, RootRenderer } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BasketballApiService {
  showGraph: boolean;
  canvas: any;
  ctx: any;
  input;
  suggestions = [];
  //ShowSats is true when testing, to  save time.
  showStats: boolean = false;
  seeName: boolean = false;
  //All stats need to be put into an object, and then pushed into an array.
  players: any = [];
  currentYear = 2019;
  kobeBestSeason;
  chartData = [
    
  ];
  first_name;
  last_name;
  //All stats need to be put into an object, and then pushed into an array.

  constructor(public _http: HttpClient, public route: Router) {}

  findPlayer(player) {
    if (player.length >= 3) {
      this._http
        .get<any>(
          `https://www.balldontlie.io/api/v1/players?season[]=2019&search=${player}`
        )
        .subscribe(response => {
          this.first_name = response.data[0].first_name;
          console.log("2nd", this.first_name);

          this.last_name = response.data[0].last_name;
          this.suggestions = response.data.filter(player => {
            if (player.id == 666786) {
              return (player.id = 666786);
            } else if (player.id == 666969) {
              return (player.id = 666969);
            }
            return player.height_feet > 1;
          });
          console.log("lets see", response);
        });

      console.log(player);
    }

    if (player == "") {
      this.seeName = false;
      this.showStats = false;
      this.suggestions = null;
    }
  }

  getPlayer(id, first_name, last_name) {
    let season = this.currentYear;
    this._http
      .get<any>(
        `https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${id}`
      )
      .subscribe(response => {
        console.log(response);
        this.showStats = true;
        this.seeName = true;
        this.first_name = first_name;
        this.last_name = last_name;
        const result = response.data[0];
        response.data[0].first_name = first_name;
        response.data[0].last_name = last_name;
        this.players.push(response.data[0]);
        console.log("players", this.players);
        [...this.chartData];

        const Data = [
          ...this.chartData,
          {
            data: [result.pts, result.reb, result.ast, result.stl],
            label: response.data[0].first_name
          }
        ];
        console.log("graphdata", Data);
        this.chartData = Data;
      });
    this.showGraph = true;

    //This clears the suggestion and search box;
    this.suggestions = null;
    this.input = "";
  }

  

  removePlayer(clickedIndex) {
    if(this.chartData == null){
      return this.showGraph == false;

    }
      else {//console.log('removePlayer', element)
      //this.chartData.pop();
      this.chartData.splice(clickedIndex, 1)
  
    this.players = this.players.filter((element, index, array) => {
      return index !== clickedIndex;
    });

  }
    

    console.log("test", this.chartData)
    
  }
}


