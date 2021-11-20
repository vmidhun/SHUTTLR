import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: any;
  constructor(public router: Router, public teamService:TeamService) { }

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
  }
  goto = (url: string) => { this.router.navigate([url])}
}
