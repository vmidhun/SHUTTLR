import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  players: any = [];

  constructor(public router: Router, public playersService: PlayerService) { }
  
  ngOnInit(): void {
    this.players = this.playersService.getPlayers();
  }
  
  goto = (url: string) => { this.router.navigate([url])}

}
