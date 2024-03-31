import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  // addGame(
  //   event: Event,
  //   gameTitle: string,
  //   gameGenre: string,
  //   gameDeveloper: string,
  //   gameReleaseYear: string,
  //   gameImageUrl: string,
  //   gamePrice: string,
  //   gameDescription: string,
  //   gameBackgroundImage: string
  // ) {
  //   event.preventDefault();
  //   this.apiService
  //     .createGame(
  //       gameTitle,
  //       gameGenre,
  //       gameDeveloper,
  //       Number(gameReleaseYear),
  //       gameImageUrl,
  //       Number(gamePrice),
  //       gameDescription,
  //       gameBackgroundImage
  //     )
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

  addGame(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
  }
}
