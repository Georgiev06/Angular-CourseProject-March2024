import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { passwordValidator } from 'src/app/shared/utils/password-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  // ngOnInit() {}

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(['bg', 'com'])]],
    tel: ['', [Validators.required]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [passwordValidator('password', 'rePassword')],
      }
    ),
  });

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      tel,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.userService.register(username!, email!, tel!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['home']);
    })
    console.log(this.form.value);
  }
}
