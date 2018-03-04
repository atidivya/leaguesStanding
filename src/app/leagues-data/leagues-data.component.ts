import { Component, OnInit } from '@angular/core';
import { Leagues } from "../data/leagues";
import { Observable } from 'rxjs/Observable';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
declare var $;


@Component({
  selector: 'app-leagues-data',
  templateUrl: './leagues-data.component.html',
  styleUrls: ['./leagues-data.component.css']
})
export class LeaguesDataComponent implements OnInit {

  leagues: any [];
  leaguesFound: boolean = false;

  public requestID;
  public teamId;


  currentLeaguesIdFound: boolean = false;
  currentLeagueID: any;

  teams: any;
  teamName: any;
  teamFlag: any;
  players: any;

  /**
   * handle success and error
   */

  handleSuccess(data){
    this.leaguesFound = true;
    this.leagues = data.data;
    console.log(data.data);
  }

  handleError(error){
    console.log(error);
  }

  
  handleCurrentLeagueSuccess(currentLeagueData){
    this.currentLeaguesIdFound= true;
    this.currentLeagueID = currentLeagueData.data.current_season_id;
    console.log(this.currentLeagueID);
    this._leagueService.getStandings(this.currentLeagueID).subscribe(
      tableData => this.handleTableDataSuccess(tableData),
      error => this.handleTableError(error),
      () => console.log("League Table Request Complete!")
    )
  }

  handleTeamError(error){
    console.log(error);
  }

  handleTableDataSuccess(tableData){
    this.teams = tableData.data[0].standings.data;
    $(function (){
      $('#dt').DataTable();
    });
    console.log(this.teams);
  }

  handleTableError(error){
    console.log(error);
  }
  

  handlePlayersDataSuccess(playersData){
    this.teamName = playersData.data.name;
    this.teamFlag = playersData.data.logo_path;
    this.players = playersData.data.squad.data;
  }

  handlePlayersError(error){
    console.log(error);
  }

  
  

  constructor(private _leagueService: Leagues) { 

  }

  /**
   * query API and subscribe the data
   */

  searchLeagues(){
    return this._leagueService.getLeagues().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => console.log("Request Complete!")
    )
  }

  getLeagueID(id: any):void{
    console.log(id);
    this.requestID = id;
    this._leagueService.getTeams(this.requestID).subscribe(
      currentLeagueData => this.handleCurrentLeagueSuccess(currentLeagueData),
      error => this.handleTeamError(error),
      () => console.log("League ID Request Complete!")
    )
  }


  getTeamId(id: any):void{
    console.log(id);
    this.teamId = id;
    this._leagueService.getPlayers(this.teamId).subscribe(
      playersData => this.handlePlayersDataSuccess(playersData),
      error => this.handlePlayersError(error),
      () => console.log("Players List Request Complete!")
    )
  }

  ngOnInit() {
 
  }

}
