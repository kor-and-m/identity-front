import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, Validators } from '@angular/forms';

import { UserService } from './../../share/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public email: FormControl;
  public password: FormControl;
  public loading: boolean;

  constructor(
  	private userService: UserService,
  	private cookieService: CookieService,
  	private router: Router,
  ) {
  	this.password = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.loading = false;
  }

  ngOnInit() {}

  public onSubmit() {
    this.loading = true;
  	this.userService.login({
      email: this.email.value,
      password: this.password.value,
    }).subscribe(
  	  (data) => this.setAuthCookie(data),
  	  (err) => this.loading = false
    );
  }

  public getErrorEmail() {
    return this.email.hasError('required') ? 'Email - поле обязательное для заполнения' :
           this.email.hasError('email') ? 'Почта не валидна' : '';
  }

  public getErrorPassword() {
    return this.password.hasError('required') ? 'Пароль - поле обязательное для заполнения' : '';
  }

  private setAuthCookie(jwt: string): void {
    this.loading = false;
  	const payload = JSON.parse(atob(jwt.split('.')[1]));
  	const exp: number = +payload['exp'];
  	const date = new Date(exp*1000);
  	this.cookieService.set('AUTH_COOKIE', jwt, date, '/');
  	this.router.navigate(['/apps']);
  }

}
