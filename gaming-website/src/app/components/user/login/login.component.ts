import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}

  login(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    // event.preventDefault();
    // this.userService.login();
    // this.router.navigate(['home']);
    console.log('clicked');
  }

}
