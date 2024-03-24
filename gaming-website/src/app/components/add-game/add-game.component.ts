import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent  implements OnInit {

  constructor(private apiService: ApiService) { }


  ngOnInit() {}

  addGame(event: Event, gameTitle: string, gameGenre: string, gameDeveloper: string, gameReleaseYear: string, gameImageUrl: string ,gamePrice : string) {
    event.preventDefault();
    this.apiService.createGame(gameTitle, gameGenre, gameDeveloper, Number(gameReleaseYear), gameImageUrl, Number(gamePrice)).subscribe(data => {
      console.log(data);
    });
  }
}
