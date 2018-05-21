import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { UserService } from './../../share/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  public email: FormControl;
  public password: FormControl;
  public password_again: FormControl;

  constructor(
  	private userService: UserService,
  	private router: Router,
  ) {
    this.password = new FormControl('', [Validators.required]);
    this.password_again = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }

  ngOnInit() {
  }

  public getErrorEmail() {
    return this.email.hasError('required') ? 'Email - поле обязательное для заполнения' :
           this.email.hasError('email') ? 'Почта не валидна' : '';
  }

  public getErrorPassword() {
    return this.password.hasError('required') ? 'Пароль - поле обязательное для заполнения' : '';
  }

  public getErrorPasswordAgain() {
    return this.password_again.hasError('required') ? 'Пароль - поле обязательное для заполнения' : '';
  }

  public onSubmit() {
    if (this.password.value !== this.password_again.value) {
      console.error('пароли не совподают');
    }
    else{
      this.userService.registration({
        email: this.email.value,
        password: this.password.value,
      }).subscribe(
        (data) => console.log(data),
        (err) => console.error(err)
      );
    }
  }

}
