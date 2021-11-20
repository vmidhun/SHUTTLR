import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  selectedGame: any;

  
  gamePlayers: any;
  isActive: boolean = false;

  leftTop: any = {};
  leftBot: any = {};
  rightTop: any = {};
  rightBot: any = {};

  TeamLeftScore: number = 0
  TeamRightScore:number = 0

  constructor(
    public gameService: GameService,
    public playersService: PlayerService,
    public teamService:TeamService
  ) { }

  ngOnInit(): void {
    this.gamePlayers = this.playersService.getPlayers();
    this.leftTop['player'] = this.gamePlayers[0].Name;
    this.leftBot['player'] = this.gamePlayers[1].Name;
    this.rightTop['player'] = this.gamePlayers[2].Name;
    this.rightBot['player'] = this.gamePlayers[3].Name;    
  }

  setGround = () => {
    this.leftTop['class'] = false;
    this.leftBot['class'] = false;
    this.rightTop['class'] = false;
    this.rightBot['class'] = false;     
  };

  leftClicked = () => {this.TeamLeftScore++ }
  rightClicked = () => {this.TeamRightScore++}

}
