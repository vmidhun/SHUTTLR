import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

export class DOUBLES_GAME {
  'ID': string;
  'Tournament_ID': string;
  'StartTime': string;
  'EndTime' : string;
  'Team1': TEAM;
  'Team2': TEAM;
  'TossWinner': string;
  'GameMoves': GAME_MOVES[] ;
}

export class TEAM {
  'player1_ID': string;
  'player1_Name': string;
  'player2_ID': string;
  'player2_Name': string;
}

export class GAME_MOVES {
  'LeftTopPlayer': string;
  'LeftBottomPlayer': string;
  'RightTopPlayer': string;
  'RightBottomPlayer': string;
  'Team1Score': number;
  'Team2Score': number;
  'ServeBox': string;
}

  let Games: DOUBLES_GAME[] = [
    {
      ID: "1",
      Tournament_ID:"",
      StartTime: "2013-03-11 11:35:24",
      EndTime: "2013-03-11 11:35:24",
      TossWinner:"",
      Team1: {
        'player1_ID': "string",
        'player1_Name': "string",
        'player2_ID': "string",
        'player2_Name': "string"
      },
      Team2: {
        'player1_ID': "string",
        'player1_Name': "string",
        'player2_ID': "string",
        'player2_Name': "string"
      },
      GameMoves: [{
        'LeftTopPlayer': "",
        'LeftBottomPlayer': "",
        'RightTopPlayer': "",
        'RightBottomPlayer': "",
        'Team1Score': 0,
        'Team2Score': 0,
        'ServeBox': "LeftBottom",
      },]
    },
    {
      ID: "2",
      Tournament_ID:"",
      StartTime: "2013-03-11 11:35:24",
      EndTime: "2013-03-11 11:35:24",
      TossWinner:"",
      Team1: {
        'player1_ID': "string",
        'player1_Name': "string",
        'player2_ID': "string",
        'player2_Name': "string"
      },
      Team2: {
        'player1_ID': "string",
        'player1_Name': "string",
        'player2_ID': "string",
        'player2_Name': "string"
      },
      GameMoves: [{
        'LeftTopPlayer': "",
        'LeftBottomPlayer': "",
        'RightTopPlayer': "",
        'RightBottomPlayer': "",
        'Team1Score': 0,
        'Team2Score': 0,
        'ServeBox': "",
      },]
    },
  ]

@Injectable({
  providedIn: 'root',
})
export class GameService {
  selectedGame: any;

  constructor(private playerService: PlayerService,) { }
  
  getGame = (ID: any) => {
    var result = Games.find(obj => {return obj.ID === ID})
    this.selectedGame = result;
    return result;
  }
 
}
