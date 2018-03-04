import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class Leagues {
    



    private apiURL: string = environment.apiURL;
    private apiToken: string = environment.apiToken;

    

    constructor(private _http: Http){
 
    }

    /**
     * Get current leagues from API
     */

    getLeagues(){
        return this._http.get(this.apiURL + '/leagues?' + this.apiToken)
            .map(res => res.json());
    }

    /**
     * Get team details from API and returns an observable
     */

    getTeams(requestID): Observable<any>{
        //this.requestID = 501;
        return this._http.get(this.apiURL + '/leagues/'+ requestID + '?'+ this.apiToken)
        .map(res => res.json());
    }

    /**
     * Get current league ID and returns an observable
     */

    getStandings(currentLeagueID): Observable<any>{
        return this._http.get(this.apiURL + '/standings/season/'+ currentLeagueID + '?'+ this.apiToken)
        .map(res => res.json());
    }

    /**
     * Get player details and return an observable
     */

    getPlayers(teamId): Observable<any>{
        return this._http.get(this.apiURL + '/teams/'+ teamId + '?'+ this.apiToken + '&include=squad')
        .map(res => res.json());
    }

 
}