import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { authGuard } from './guards/auth.guard';
import { AddGameComponent } from './components/add-game/add-game.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { ErrorComponent } from './components/error/error.component';
import { UserRoutingModule } from './components/user/user-routing.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'games', component: GamesComponent, canActivate: [authGuard]},
  {path: 'add-game', component: AddGameComponent, canActivate: [authGuard]},
  {path: 'games/:gameId', component: GameDetailsComponent, canActivate: [authGuard]},
  {path: '**', redirectTo: '/404'},
  {path: '404', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
