import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Store } from '@ngrx/store';

import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import { iScope } from '../interfaces/scope';
import { State } from '../reducers';
import * as scopeActions from '../actions/scope';


@Injectable()
export class ScopeService {

  constructor(private http: Http, private cookieService: CookieService, private store: Store<State>) {}

  public create_scope(scope: iScope): void {
    const body: string = JSON.stringify(scope);
    this.http.post('/api/scopes/', body)
                    .map(response => response.json() as iScope)
                    .subscribe(
                      (scope) => this.store.dispatch(new scopeActions.Load(scope)),
                      (err) => console.error(err)
                    );
  }

  public get_scopes(): Observable<iScope[]> {
    return this.get_scopes_from_store().mergeMap(
      (scopes: iScope[]) => {
      	if (scopes === null) {
          this.store.dispatch(new scopeActions.Init([]));
      	  return this.get_scopes_from_server().map((scopes) => {
            this.store.dispatch(new scopeActions.Init(scopes));
            return scopes;
          });
      	}
      	return Observable.of(scopes);
      }
    );
  }

  private get_scopes_from_store(): Observable<iScope[]> {
    return this.store.select('scopes');
  }

  private get_scopes_from_server(): Observable<iScope[]> {
    const headers = new Headers({
     'Content-Type': 'application/json',
    });
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.get('/api/scopes/', options)
                    .map(response => response.json() as iScope[]);
  }

}