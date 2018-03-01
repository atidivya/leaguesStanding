import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  leagues: any;
  seasons: any;
  newID: any;
  requestID: any;
  standingDetails:any;
  currentLeague: any;
 

  apiURL = 'https://soccer.sportmonks.com/api/v2.0';
  apiToken = 'api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC';




  constructor(private http: Http){
  	console.log("constructor working");
    this.getData();

    this.getLeagues();

  }

   getData(){
    return this.http.get(this.apiURL + '/leagues?'+ this.apiToken)
      .map((res: Response) => res.json())
  }


  getLeagues(){
    this.getData().subscribe(leagues => {
      //console.log(leagues);
      this.leagues = leagues.data;
      //console.log(this.leagues);
    })
  }

  getID(id: any):void {
    
    //console.log(id);
    this.requestID = id;
    //console.log(this.requestID);


    this.http.get(this.apiURL + '/leagues/'+ this.requestID + '?'+ this.apiToken)
      .map((res: Response) => res.json())
      .subscribe(currentLeague =>{
        //console.log(currentLeague);
        this.currentLeague = currentLeague.data.current_season_id;
        //console.log(this.currentLeague);
        
        this.http.get(this.apiURL + '/standings/season/'+ this.currentLeague + '?'+ this.apiToken)
        .map((res: Response) => res.json())
        .subscribe(currentStandings => {
          //console.log(currentStandings);
          this.standingDetails = currentStandings.data[0].standings.data;
          console.log(this.standingDetails);
        })
        
      });
 

       //console.log(JSON.stringify(currentLeague));
        //this.leagueDetails = JSON.stringify(currentLeague);
        //console.log(this.leagueDetails);
   
    //match the id with API
    //this.newID = this.leagues.filter(value => value.id === parseInt(id));
    //this.requestID = this.leagues.id;
    
  }



}
