import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
    AddGameComponent,
    GameDetailsComponent,
    ErrorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, IonicModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
