import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
})
export class EditGameComponent implements OnInit {
  gameData = {} as Game;
  formattedReleaseYear: string = '';

  game: Game = {
    _id: '',
    title: '',
    genre: '',
    developer: '',
    releaseYear: new Date(),
    imageUrl: '',
    price: 1,
    description: '',
    backgroundImage: '',
  };

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('gameId')!;
    this.apiService.getGame(id).subscribe((game) => {
      this.gameData = game;

      this.game = {
        ...this.gameData,
        releaseYear: new Date(this.gameData.releaseYear)  // Convert to Date object
      };
  
      // Format releaseYear to "yyyy-MM-dd"
      if (this.game.releaseYear instanceof Date && !isNaN(this.game.releaseYear.getTime())) {
        this.formattedReleaseYear = this.game.releaseYear.toISOString().split('T')[0];
      } else {
        // If releaseYear is not a valid Date object, set it to an empty string
        this.formattedReleaseYear = '';
      }
    });
  }

  editGame(form: NgForm) {
    console.log(form.value);

    if (form.invalid) {
      return;
    }

    const {
      title,
      genre,
      developer,
      releaseYear,
      imageUrl,
      price,
      description,
      backgroundImage,
    } = form.value;

    this.activatedRoute.params.subscribe((data) => {
      const gameId = data['gameId'];
      console.log(gameId);
      this.apiService
        .updateGame(
          gameId,
          title,
          genre,
          developer,
          releaseYear,
          imageUrl,
          price,
          description,
          backgroundImage
        )
        .subscribe(() => {
          this.router.navigate([`games/${gameId}`]);
        });
    });
  }
}
