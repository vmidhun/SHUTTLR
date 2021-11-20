import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Tournament } from '../../../models/tournament.model'
import { TournamentService } from '../../../services/tournament.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {

  tournament: Tournament = new Tournament();
  
  submitted = false;

  constructor(
    private tournamentService: TournamentService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  saveTournament(): void {
    let tournamentToSave = {
      title: this.tournament.title,
      // user_id: this.userService.currentUser,
      user_id: "Admin",
      published: false
    }
    this.tournamentService.create(tournamentToSave).then(() => {
      this.router.navigate(['tournaments'])
      this.submitted = true;
    });
  }

  newTournament(): void {
    this.submitted = false;
    this.tournament = new Tournament();
  }
}
