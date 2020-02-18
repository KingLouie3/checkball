import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
  players:  any = [];
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
  
  //All stats need to be put into an object, and then pushed into an array.

  constructor(public _http: HttpClient) {}

  
 
  findPlayer(player) {
    if (player.length >= 3) {
      this._http
        .get<any>(
          `https://www.balldontlie.io/api/v1/players?season[]=2019&search=${player}`
        )
        .subscribe(response => {
          this.first_name  = response.data[0].first_name;
          console.log("2nd",this.first_name);

          this.last_name = response.data[0].last_name;
          this.suggestions = response.data.filter(player => {
            if(player.id == 666786){
              return player.id = 666786
            }
            else if(player.id == 666969){
              return player.id = 666969
            }
            return player.height_feet >1  
                     
          });          console.log('lets see', response);
        })

      console.log(player);
    }

    if(player == '') {
      this.seeName = false;
      this.showStats = false;
      this.suggestions = null;
    }
  }

  getPlayer(id,first_name, last_name) {
    this._http
      .get<any>(
        `https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${id}`
      )
      .subscribe(response => {
        console.log(response);
        this.showStats = true;
        this.seeName = true;
        this.first_name  =  first_name;
        this.last_name  = last_name;
        response.data[0].first_name = first_name
        response.data[0].last_name = last_name;
        this.players.push(response.data[0]);
        console.log('players',this.players);

        
       
        
      });
       //This clears the suggestion and search box;
       this.suggestions = null;
       this.input = '';
      }

      removePlayer(clickedIndex) {
       this.players = this.players.filter((element, index, array)=>{
          return index !==  clickedIndex;
       });
          }

}
