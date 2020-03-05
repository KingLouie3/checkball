import { Router } from "@angular/router";
import { Injectable, RootRenderer } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from 'rxjs';
import { element } from 'protractor';

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
    if (player.length >= 2) {
      this._http
        .get<any>(
          `https://www.balldontlie.io/api/v1/players?season[]=2019&search=${player}`
        )
        .subscribe(response => {
          this.first_name = response.data[0].first_name;
          // console.log("2nd", this.first_name);

          this.last_name = response.data[0].last_name;
          this.suggestions = response.data
          // console.log("lets see", response);
        });

      console.log(player);
    }

    if (player == "") {
      this.seeName = false;
      this.showStats = false;
      this.suggestions = null;
    }
  }

  prevSeason(){

  }
nextSeason(){
  
}
  getPlayer(id, first_name, last_name) {
    let  season = 2019;
    let played:boolean  = false
    let x = 0
    let seasons =  [];
    let reqs  = [];
    for(let i = 2019; i >= 2012; i--){
      reqs.push(this._http.get<any>(`https://www.balldontlie.io/api/v1/season_averages?season=${i}&player_ids[]=${id}`));
    }
    forkJoin(reqs).subscribe(response => {
      //forkJoin puts responses in order.
      // if(response.data.season !== null) {
      //   seasonsPlayed.push(response.data[0].season);
      // }
      

        console.log('name', this.first_name, this.last_name)
        seasons =  response.filter(season => season.data.length > 0);
        
        seasons.forEach((element, index)=>{
          this.players.push(element.data[0]);
          // this.first_name = element.data[0].first_name;
          // this.last_name = element.data[0].last_name;
          this.players[index].first_name =  first_name;
          this.players[index].last_name =  last_name

          console.log('player', this.players)


        })

        // seasons.forEach((element, index, array)=>{
        //   console.log('element', element)
        // })
        // this.showStats = true;
        // this.seeName = true;
        // 
        // const result = response.data[0];
        // 
          // this.players.push(response.data[i]);
          // console.log("players", this.players);
        
        
        // [...this.chartData];

        // const Data = [
        //   ...this.chartData,  
        //   {
        //     data: [result.pts, result.reb, result.ast, result.stl],
        //     label: response.data[0].first_name
        //   }
        // ];
        // console.log("graphdata", Data);
        // this.chartData[x] = Data;
        // x++  
      });

    this.showGraph = true;

    //This clears the suggestion and search box;
    this.suggestions = null;
    this.input = "";
  
  }
  
  // console.log(this.chartData)
  
  

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
    

    // console.log("test", this.chartData)
    
  }
}


