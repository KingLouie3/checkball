import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BasketballApiService {
query: any = 'luka';
lebronStatsUrl: any =  "https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=237"
searchPlayerUrl: any = "https://www.balldontlie.io/api/v1/players?search="
ppg;
reb;
ast;

    constructor(public _http: HttpClient) { }

  statCheck() {
    return this._http.get(`${this.lebronStatsUrl}`);
  }

  searchStat() {
    return this._http.get(`${this.searchPlayerUrl}+${this.query}`)
  }
}
