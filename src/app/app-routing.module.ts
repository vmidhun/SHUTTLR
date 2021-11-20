import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ListPlayersComponent } from './components/players/list-players/list-players.component';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { AddTeamComponent } from './components/team/add-team/add-team.component';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { GameComponent } from './components/game/game.component';
import { ListTournamentComponent } from './components/tournament/list-tournament/list-tournament.component';
import { ListMatchComponent } from './components/match/list-match/list-match.component';
import { AddMatchComponent } from './components/match/add-match/add-match.component';
import { AddTournamentComponent } from './components/tournament/add-tournament/add-tournament.component';

const routes: Routes = [
  { path: '', redirectTo: 'tournaments', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'teams', component: TeamListComponent },   
  { path: 'players', component: ListPlayersComponent },
  { path: 'game', component: GameComponent },
  { path: 'tournaments', component: ListTournamentComponent },
  { path: 'matches', component: ListMatchComponent },
  { path: 'matches/:id', component: ListMatchComponent },
  { path: 'user/add', component: ListUsersComponent },
  { path: 'player/add', component: AddPlayerComponent },
  { path: 'team/add', component: AddTeamComponent },
  { path: 'match/add', component: AddMatchComponent },
  { path: 'tournament/add', component: AddTournamentComponent },  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }
