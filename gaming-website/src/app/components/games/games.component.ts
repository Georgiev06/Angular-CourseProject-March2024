import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  games: Game[] | null = [];

  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllGames().subscribe(
      (games: Game[]) => {
        this.games = games;

        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }
}
