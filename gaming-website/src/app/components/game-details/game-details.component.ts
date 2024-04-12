import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent  implements OnInit {
  currentUserId: string | undefined;
  gameId!: string;
  
  game = {} as Game;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {}
  
  ngOnInit() {
    this.currentUserId = this.userService.getUserId(); 
    this.activatedRoute.params.subscribe(data => {
      this.gameId = data['gameId'];
      this.apiService.getGame(this.gameId).subscribe(game => {
        this.game = game;
        console.log(this.game);
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

  isUserTheCreator(): boolean {
    return this.game.userId === this.currentUserId;
  }
}

