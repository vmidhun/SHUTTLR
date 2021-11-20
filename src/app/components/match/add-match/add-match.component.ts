import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  constructor() { }
  submitted = false;
  ngOnInit(): void {
  }


  saveMatch(): void {
    // let tournamentToSave = {
    //   title: this.tournament.title,
    //   // user_id: this.userService.currentUser,
    //   user_id: "Admin",
    //   published: false
    // }
    // this.tournamentService.create(tournamentToSave).then(() => {
    //   this.router.navigate(['tournaments'])
    //   this.submitted = true;
    // });
  }

  newMatch(): void {
    // this.submitted = false;
    // this.tournament = new Tournament();
  }
}
