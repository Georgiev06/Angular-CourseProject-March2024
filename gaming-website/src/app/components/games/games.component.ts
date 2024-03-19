import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllGames().subscribe(
      (games: Game[]) => {
        console.log('Received games:', games);
        this.games = games; 
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }
}
