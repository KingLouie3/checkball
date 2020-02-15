import { BasketballApiService } from './basketball-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [BasketballApiService, GraphComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
