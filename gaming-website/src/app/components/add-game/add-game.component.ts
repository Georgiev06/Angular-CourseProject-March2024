import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addGame(form: NgForm) {
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

    this.apiService.createGame(title, genre, developer, releaseYear, imageUrl, price, description, backgroundImage).subscribe(() => {
      this.router.navigate(['games']);
    })
  }
}
