import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { MatchService } from 'src/app/services/match.service';
import { TournamentService } from 'src/app/services/tournament.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.css']
})
export class ListMatchComponent implements OnInit {
  Matches: any;
  Tournaments: any;
  selectedTournament: any = {ID: "",UserID: "",TournamentName: ""}
  constructor(
    public matchService: MatchService,
    public gameService: GameService,
    public userService: UserService,
    public tournamentService:TournamentService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.Tournaments = this.matchService.getMatches();
    //this.loadMathches();
  }

  addMatch = () => {
    this.router.navigate(["match/add"]);
  };

  // onChange = (tourname:any) => {
  //   console.log(tourname);
  //  // this. Matches = this.matchService.getMatchesByTournament(tourname.ID)
    
  // }
  LoadGame= (ID:number) =>{
    // this.gameService.getGame(ID);
    // this.router.navigate(['game'])
  }
  
  // loadMathches(): void {
  //  // const ID = this.route.snapshot.paramMap.get('ID')
  //  // console.log("ListMatchComponent loadMatches ID", ID)
  //   // this.matchService.getMatchesByTournament(ID)
  //   //   .subscribe(matches => this.Matches = matches);
  // }
}