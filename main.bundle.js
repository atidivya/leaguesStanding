webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to SportsMonk API!\r\n  </h1>\r\n  <app-leagues-data></app-leagues-data>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leagues_data_leagues_data_component__ = __webpack_require__("./src/app/leagues-data/leagues-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_leagues__ = __webpack_require__("./src/app/data/leagues.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__leagues_data_leagues_data_component__["a" /* LeaguesDataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__data_leagues__["a" /* Leagues */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/leagues.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Leagues; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Leagues = /** @class */ (function () {
    function Leagues(_http) {
        this._http = _http;
        this.apiURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiURL;
        this.apiToken = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiToken;
    }
    /**
     * Get current leagues from API
     */
    Leagues.prototype.getLeagues = function () {
        return this._http.get(this.apiURL + '/leagues?' + this.apiToken)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get team details from API and returns an observable
     */
    Leagues.prototype.getTeams = function (requestID) {
        //this.requestID = 501;
        return this._http.get(this.apiURL + '/leagues/' + requestID + '?' + this.apiToken)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get current league ID and returns an observable
     */
    Leagues.prototype.getStandings = function (currentLeagueID) {
        return this._http.get(this.apiURL + '/standings/season/' + currentLeagueID + '?' + this.apiToken)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get player details and return an observable
     */
    Leagues.prototype.getPlayers = function (teamId) {
        return this._http.get(this.apiURL + '/teams/' + teamId + '?' + this.apiToken + '&include=squad')
            .map(function (res) { return res.json(); });
    };
    Leagues = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Leagues);
    return Leagues;
}());



/***/ }),

/***/ "./src/app/leagues-data/leagues-data.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/leagues-data/leagues-data.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"searchLeagues()\">Get Current Leagues</button>\r\n<br/>\r\n<select #selectElem (change)=\"getLeagueID(selectElem.value)\">\r\n        <option selected>Select..</option>\r\n  <option *ngFor=\"let league of leagues\" [value]=\"league.id\">\r\n      {{league.name}}\r\n  </option>\r\n</select>\r\n<br/>\r\n\r\n<table id=\"dt\" class=\"table\">\r\n  <thead class=\"thead-dark\">\r\n    <tr>\r\n      <th scope=\"col\">Position</th>\r\n      <th scope=\"col\">Team Name</th>\r\n      <th scope=\"col\">Played</th>\r\n      <th scope=\"col\">Won</th>\r\n      <th scope=\"col\">Drawn</th>\r\n      <th scope=\"col\">Lost</th>\r\n      <th scope=\"col\">Goal</th>\r\n      <th scope=\"col\">Difference</th>\r\n      <th scope=\"col\">Points</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let team of teams\">\r\n      <th scope=\"row\">{{team.position}}</th>\r\n      <td><a href=\"#\" \r\n             data-toggle=\"modal\" \r\n             data-target=\"#modalTeamInfo\"\r\n             (click)=\"getTeamId(team.team_id)\"\r\n          > \r\n          {{team.team_name}}\r\n          </a>\r\n      </td>\r\n      <td>{{team.overall.games_played}}</td>\r\n      <td>{{team.overall.won}}</td>\r\n      <td>{{team.overall.draw}}</td>\r\n      <td>{{team.overall.lost}}</td>\r\n      <td>{{team.overall.goals_scored}}</td>\r\n      <td>{{team.total.goal_difference}}</td>\r\n      <td>{{team.total.points}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n  <!-- Modal -->\r\n\r\n\r\n  <div id=\"modalTeamInfo\" class=\"modal fade\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <h2>Team {{teamName}}</h2>\r\n                \r\n                <img src=\"{{teamFlag}}\">\r\n                <table  class=\"table\">\r\n                    <thead class=\"thead-dark\">\r\n                      <tr>\r\n                        <th scope=\"col\">Player Number</th>\r\n                        <th scope=\"col\">Appearences</th>\r\n                        <th scope=\"col\">Goals</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let player of players\">\r\n                        <th scope=\"row\">{{player.number}}</th>\r\n                        <td>{{player.appearences}}</td>\r\n                        <td>{{player.goals}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n<!-- Model View -->"

/***/ }),

/***/ "./src/app/leagues-data/leagues-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaguesDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_leagues__ = __webpack_require__("./src/app/data/leagues.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaguesDataComponent = /** @class */ (function () {
    function LeaguesDataComponent(_leagueService) {
        this._leagueService = _leagueService;
        this.leaguesFound = false;
        this.currentLeaguesIdFound = false;
    }
    /**
     * handle success and error
     */
    LeaguesDataComponent.prototype.handleSuccess = function (data) {
        this.leaguesFound = true;
        this.leagues = data.data;
        console.log(data.data);
    };
    LeaguesDataComponent.prototype.handleError = function (error) {
        console.log(error);
    };
    LeaguesDataComponent.prototype.handleCurrentLeagueSuccess = function (currentLeagueData) {
        var _this = this;
        this.currentLeaguesIdFound = true;
        this.currentLeagueID = currentLeagueData.data.current_season_id;
        console.log(this.currentLeagueID);
        this._leagueService.getStandings(this.currentLeagueID).subscribe(function (tableData) { return _this.handleTableDataSuccess(tableData); }, function (error) { return _this.handleTableError(error); }, function () { return console.log("League Table Request Complete!"); });
    };
    LeaguesDataComponent.prototype.handleTeamError = function (error) {
        console.log(error);
    };
    LeaguesDataComponent.prototype.handleTableDataSuccess = function (tableData) {
        this.teams = tableData.data[0].standings.data;
        $(function () {
            $('#dt').DataTable();
        });
        console.log(this.teams);
    };
    LeaguesDataComponent.prototype.handleTableError = function (error) {
        console.log(error);
    };
    LeaguesDataComponent.prototype.handlePlayersDataSuccess = function (playersData) {
        this.teamName = playersData.data.name;
        this.teamFlag = playersData.data.logo_path;
        this.players = playersData.data.squad.data;
    };
    LeaguesDataComponent.prototype.handlePlayersError = function (error) {
        console.log(error);
    };
    /**
     * query API and subscribe the data
     */
    LeaguesDataComponent.prototype.searchLeagues = function () {
        var _this = this;
        return this._leagueService.getLeagues().subscribe(function (data) { return _this.handleSuccess(data); }, function (error) { return _this.handleError(error); }, function () { return console.log("Request Complete!"); });
    };
    LeaguesDataComponent.prototype.getLeagueID = function (id) {
        var _this = this;
        console.log(id);
        this.requestID = id;
        this._leagueService.getTeams(this.requestID).subscribe(function (currentLeagueData) { return _this.handleCurrentLeagueSuccess(currentLeagueData); }, function (error) { return _this.handleTeamError(error); }, function () { return console.log("League ID Request Complete!"); });
    };
    LeaguesDataComponent.prototype.getTeamId = function (id) {
        var _this = this;
        console.log(id);
        this.teamId = id;
        this._leagueService.getPlayers(this.teamId).subscribe(function (playersData) { return _this.handlePlayersDataSuccess(playersData); }, function (error) { return _this.handlePlayersError(error); }, function () { return console.log("Players List Request Complete!"); });
    };
    LeaguesDataComponent.prototype.ngOnInit = function () {
    };
    LeaguesDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-leagues-data',
            template: __webpack_require__("./src/app/leagues-data/leagues-data.component.html"),
            styles: [__webpack_require__("./src/app/leagues-data/leagues-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_leagues__["a" /* Leagues */]])
    ], LeaguesDataComponent);
    return LeaguesDataComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiToken: 'api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC',
    apiURL: 'https://soccer.sportmonks.com/api/v2.0'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map