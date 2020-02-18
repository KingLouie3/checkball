import { AfterViewInit } from '@angular/core';
import { BasketballApiService } from './basketball-api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import * as Chart from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  search: any;
  stats;
  chart  =  [];
  constructor(public _api: BasketballApiService, private _http: HttpClient)  {}
  title = 'angular8chartjs';
  chartType: any = "polarArea";
  canvas: any;
  ctx: any;
   values =  [5,1, 11];
  

   





    


    
  
  

}
  
  
  

