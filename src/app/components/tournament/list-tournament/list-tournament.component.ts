import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { Router } from "@angular/router";
import { MatchService } from "../../../services/match.service";
import { Tournament } from "../../../models/tournament.model";
import { TournamentService } from "../../../services/tournament.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-list-tournament",
  templateUrl: "./list-tournament.component.html",
  styleUrls: ["./list-tournament.component.css"],
})
export class ListTournamentComponent implements OnInit, OnChanges {
  //

  @Input() tournament?: Tournament;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTournament: Tournament = {
    title: "",
    user_id: "",
    published: false,
  };
  message = "";

  tournaments?: Tournament[] | undefined;

  currentIndex = -1;

  title = "";

  constructor(
    public tournamentService: TournamentService,
    public matchService: MatchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = "";
    this.retrieveTournaments()
  }

  ngOnChanges = (): void => {
    this.message = "";
    this.currentTournament = { ...this.tournament };
  };

  retrieveTournaments(): void {
    this.tournamentService
      .getTournaments()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        console.log(data)
        this.tournaments = data;
      });
  }

  setActiveTournament(tournament: Tournament, index: number): void {
    this.currentTournament = tournament;
    this.router.navigate(["matches"]);
  }

  addTournament = () => {
    this.router.navigate(["tournament/add"]);
  };

  updatePublished(status: boolean): void {
    if (this.currentTournament.key) {
      this.tournamentService
        .update(this.currentTournament.key, { published: status })
        .then(() => {
          this.currentTournament.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((err) => console.log(err));
    }
  }

  updateTournament(): void {
    const data = {
      title: this.currentTournament.title,
      published: this.currentTournament.published,
    };

    if (this.currentTournament.key) {
      this.tournamentService
        .update(this.currentTournament.key, data)
        .then(() => (this.message = "The tournament was updated successfully!"))
        .catch((err) => console.log(err));
    }
  }

  deleteTournament(): void {
    if (this.currentTournament.key) {
      this.tournamentService
        .delete(this.currentTournament.key)
        .then(() => {
          this.refreshList.emit();
          this.message = "The tournament was updated successfully!";
        })
        .catch((err) => console.log(err));
    }
  }
}
