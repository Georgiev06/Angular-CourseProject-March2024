import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GamesComponent } from './components/games/games.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { ErrorComponent } from './components/error/error.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './components/user/user.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    GamesComponent,
    LoaderComponent,
    AddGameComponent,
    GameDetailsComponent,
    ErrorComponent
  ],
  imports: [BrowserModule, SharedModule, HttpClientModule, UserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
