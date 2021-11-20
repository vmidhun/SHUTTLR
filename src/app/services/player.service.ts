import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Player} from '../models/player.model'

// let players: PLAYER[] = [
//     {ID: 1, Name: 'Midhun', DoB: 41, Gender: "M", Flat: "B4514"},
//     {ID: 2, Name: 'Anil', DoB: 41, Gender: "M", Flat: "B4514"},
//     {ID: 3, Name: 'Chandru', DoB: 41, Gender: "M", Flat: "B4514"},
//     {ID: 4, Name: 'Chetan', DoB: 41, Gender: "M", Flat: "B4514"},
//     {ID: 5, Name: 'Aniket', DoB: 42, Gender: "M", Flat: "B4514" }
//   ];
    
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  selectedPlayer: any
  playersByUser: any;
 
  private dbPath = '/players';

  Players: AngularFireList<Player>;

  constructor(private db: AngularFireDatabase) {
    this.Players = db.list(this.dbPath);
  }

  getPlayers(): AngularFireList<Player> {
    return this.Players;
  }

  addPlayer(player: Player): any {
    console.log(player);
    return this.Players.push(player);
  }

  update(key: string, value: any): Promise<void> {
    return this.Players.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.Players.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.Players.remove();
  }
}