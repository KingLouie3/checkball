import { GraphComponent } from './../graph/graph.component';
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
import { Router, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  showGraph: boolean;
  canvas: any;
  ctx: any;
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
  KobeSeason = [];
  constructor(public _api: BasketballApiService, private _http: HttpClient, private route: Router) {}
  getKobeSeasonStats() {
    this._http
    .get<any>(
      `https://www.balldontlie.io/api/v1/season_averages?season=2005&player_ids[]=1043`
    ).subscribe(response => {
      console.log('response', response)
      this.KobeSeason.push(response.data[0]);
      console.log('KobeSeasonstats', this.KobeSeason);
      }
    )    
  
    
  }


ngOnInit() {
  this.getKobeSeasonStats();

}
  
  seeGraph() {

    this.route.navigate(['graph']);
  }

}
