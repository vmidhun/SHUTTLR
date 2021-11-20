import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Tournament } from '../models/tournament.model'

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  selectedTournament: any
  tournamentsByUser: any;
 
  private dbPath = '/tournaments';

  Tournaments: AngularFireList<Tournament>;

  constructor(private db: AngularFireDatabase) {
    this.Tournaments = db.list(this.dbPath);
  }

  getTournaments(): AngularFireList<Tournament> {
    return this.Tournaments;
  }

  create(tournament: Tournament): any {
    console.log(tournament); 
    return this.Tournaments.push(tournament);
  }

  update(key: string, value: any): Promise<void> {  
    return this.Tournaments.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.Tournaments.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.Tournaments.remove();
  }
}
