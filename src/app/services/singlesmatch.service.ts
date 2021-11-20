import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { SinglesMatch,SinglesTeam, MatchData} from '../models/match.model'

@Injectable({
  providedIn: 'root'
})
export class SinglesmatchService {

  selectedSinglesMatch: any
 
  private dbPath = '/singlematches';

  SinglesMatches: AngularFireList<SinglesMatch>;

  constructor(private db: AngularFireDatabase) {
    this.SinglesMatches = db.list(this.dbPath);
  }

  getAll(): AngularFireList<SinglesMatch> {
    return this.SinglesMatches;
  }

  create(singlematch: SinglesMatch): any {
    console.log(singlematch);
    return this.SinglesMatches.push(singlematch);
  }

  update(key: string, value: any): Promise<void> {
    return this.SinglesMatches.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.SinglesMatches.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.SinglesMatches.remove();
  }
}