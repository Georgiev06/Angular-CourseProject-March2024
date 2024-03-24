import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent  implements OnInit {
  game = {} as Game;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGame('660076e12f850453440311e7').subscribe(game => {
      this.game = game;
    });
  }

}
