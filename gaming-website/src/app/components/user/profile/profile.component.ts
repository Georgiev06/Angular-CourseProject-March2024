import { Component, OnInit } from '@angular/core';
import { User, UserForAuth } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent  implements OnInit {
  user: UserForAuth = {} as UserForAuth;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

}
