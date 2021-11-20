import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { DoublesMatch,MatchData} from '../models/match.model'

@Injectable({
  providedIn: 'root'
})
export class DoublesMatchService {
  selectedDoublesMatch: any
 
  private dbPath = '/doublematches';

  DoublesMatches: AngularFireList<DoublesMatch>;

  constructor(private db: AngularFireDatabase) {
    this.DoublesMatches = db.list(this.dbPath);
  }

  getDoublesMatches(): AngularFireList<DoublesMatch> {
    return this.DoublesMatches;
  }

  create(doublematch: DoublesMatch): any {
    console.log(doublematch);
    return this.DoublesMatches.push(doublematch);
  }

  update(key: string, value: any): Promise<void> {
    return this.DoublesMatches.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.DoublesMatches.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.DoublesMatches.remove();
  }
}