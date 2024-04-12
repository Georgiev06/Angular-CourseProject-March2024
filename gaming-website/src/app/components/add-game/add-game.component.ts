import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent {
  userId: string;

  constructor(private apiService: ApiService, private userService: UserService, private router: Router) {
    this.userId = this.userService.getUserId();
  }
  addGame(form: NgForm) {

    console.log(this.userId);
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

    this.apiService.createGame(title, genre, developer, releaseYear, imageUrl, price, description, backgroundImage, this.userId).subscribe(() => {
      this.router.navigate(['games']);
    })
  }
}
