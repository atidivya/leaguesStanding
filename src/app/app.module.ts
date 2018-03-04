import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LeaguesDataComponent } from './leagues-data/leagues-data.component';
import { Leagues } from './data/leagues';


@NgModule({
  declarations: [
    AppComponent,
    LeaguesDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Leagues],
  bootstrap: [AppComponent]
})
export class AppModule { }
