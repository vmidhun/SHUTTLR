import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../../models/team.model';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  players:any;
  currentTeam: Team = { ID: 0, TeamName: "", Player1: "", Player2: ""}

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
  }
  addTeam = () => {
    this.teamService.addTeam(this.currentTeam);
    this.router.navigate(['teams'])
  }

}
