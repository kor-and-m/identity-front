import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';

import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { iSession } from '../interfaceses/session';

interface loginParams {
  "email": string;
  "password": string,
  "scope_name": string,
}

interface registrationParams extends loginParams {
  "back_url": string;
}

@Injectable()
export class UserService {

  constructor(private http: Http, private cookieService: CookieService) {}

  public login(user: loginParams): Observable<string> {
  	const body = JSON.stringify(user);
    const headers = new Headers({
     'Content-Type': 'application/json',
    });
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.post('http://82.146.43.125/api/auth/login/', body, options)
                    .map(response => response.json());
  }

  public registration(user: registrationParams): Observable<any> {
    const body = JSON.stringify(user);
    const headers = new Headers({
     'Content-Type': 'application/json',
    });
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.post('http://82.146.43.125/api/auth/registration/', body, options);
  }

  public logout(): void {
    this.cookieService.delete('AUTH_COOKIE');
  }

  public get_session(): iSession {
    const jwt: string = this.cookieService.get('AUTH_COOKIE');
    if (jwt) {
      const session: iSession = JSON.parse(atob(jwt.split('.')[1]));
      return session;
    }
  }

}
