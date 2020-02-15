import { Injectable } from "@angular/core";
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
  players = [];
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
          this.first_name =  response.data.first_name;
          console.log("1st",this.first_name);
          this.first_name  = response.data[0].first_name;
          console.log("2nd",this.first_name);

          this.last_name = response.data[0].last_name;
          this.suggestions = response.data.filter(player => {
            return player.height_feet > 1 ;
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

        // this.ppg = response.data[0].pts,
        // this.reb = response.data[0].reb;
        // this.ast = response.data[0].ast;
        // this.games_played = response.data[0].games_played;
        // this.oreb = response.data[0].oreb;
        // this.reb = response.data[0].dreb;
        // this.fgm = response.data[0].fgm;
        // this.fga = response.data[0].fga;
        // this.fg_pct = response.data[0].fg_pct;
        // this.fg3m = response.data[0].fg3m;
        // this.fg3a = response.data[0].fg3a;
        // this.fg3_pct = response.data[0].fg3_pct;
        // this.ftm = response.data[0].ftm;
        // this.fta = response.data[0].fta;
        // this.ft_pct = response.data[0].ft_pct;
        // this.stl = response.data[0].stl;
        // this.pf = response.data[0].pf;
        // this.min = response.data[0].min;
        // this.turnover = response.data[0].turnover;

       
       
        
      });
       //This clears the suggestion and search box;
       this.suggestions = null;
       this.input = '';
       
       

  }

}
