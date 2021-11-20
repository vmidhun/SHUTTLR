import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: "root",
})
export class MatchService {
  constructor(private db: AngularFireDatabase) {
  }
}

  // selectedMatch: any;
  // matchesByTournmentResult: any = [];
  // constructor(private playerService: PlayerService) {}


  // getMatchesByTournament = (Tournament_ID:string) => {
  //   this.matchesByTournmentResult = [];
  //   var result = Matches.forEach((obj) => {
  //     if (obj.Tournament_ID === Tournament_ID) {
  //       this.matchesByTournmentResult.push(obj);
  //     }
  //   });
  //   console.log("ListMatchComponent loadMatches matchesByTournmentResult", this.matchesByTournmentResult)
  // };


  // getMatchesById = (ID: string) => {
  //   this.selectedMatches = [];
  //   var result = Matches.forEach((obj) => {
  //     if (obj.ID === ID) {
  //       this.selectedMatches.push(obj);
  //     }
  //   });
  //   console.log(
  //     "MatchService: getMatchById()=>  selectedMatches",
  //     this.selectedMatches
  //   );
  // };



