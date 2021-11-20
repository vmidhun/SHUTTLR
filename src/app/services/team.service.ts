import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Team} from '../models/team.model'

// export class TEAMS {
//   'ID': number;
//   'TeamName': string;
//   'Player1': string;
//   'Player2': string;
// }

// let teams: TEAMS[] = [
//   {
//     ID: 1,
//     TeamName: 'Team A',
//     Player1: 'Midhun',
//     Player2: 'Anil Gowda',
//   },
//   {
//     ID: 2,
//     TeamName: 'Team B',
//     Player1: 'Chandru (S)',
//     Player2: 'Chandru(H)',
//   },
//   {
//     ID: 3,
//     TeamName: 'Team C',
//     Player1: 'Navachetan',
//     Player2: 'Anil',
//   },
//   {
//     ID: 4,
//     TeamName: 'Team D',
//     Player1: 'Lova',
//     Player2: 'Anil Sreedharan',
//   },
// ];
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  selectedTeam: any
  teamsByUser: any;
 
  private dbPath = '/teams';

  Teams: AngularFireList<Team>;

  constructor(private db: AngularFireDatabase) {
    this.Teams = db.list(this.dbPath);
  }

  getTeams(): AngularFireList<Team> {
    return this.Teams;
  }

  addTeam(team: Team): any {
    console.log(team);
    return this.Teams.push(team);
  }

  update(key: string, value: any): Promise<void> {
    return this.Teams.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.Teams.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.Teams.remove();
  }
}
