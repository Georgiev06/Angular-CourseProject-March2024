import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent  implements OnInit {
  game = {} as Game;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {    
    this.activatedRoute.params.subscribe(data => {
      const gameId = data['gameId'];
      this.apiService.getGame(gameId).subscribe(game => {
        this.game = game;
      });
    })
  }

  deleteGame() {
    this.activatedRoute.params.subscribe(data => {
      const gameId = data['gameId'];
      this.apiService.deleteGame(gameId).subscribe(() => {
        this.router.navigate(['games']);
      });
    })
  }
}

