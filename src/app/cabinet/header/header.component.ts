import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../share/services/auth.service';
import { ScopeService } from './../../share/services/scope.service';
import { iSession } from '../../share/interfaces/session';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public session: iSession;
  public scopes_all: number;
  public scopes_my: number;

  constructor(
  	private userService: UserService,
    private scopeService: ScopeService,
  	private router: Router,
  ) {
  	this.session = null;
    this.scopes_all = 0;
    this.scopes_my = 0;
  }

  ngOnInit() {
  	this.session = this.userService.get_session();
    this.scopeService.get_scopes().subscribe(
      (scopes) => {
        this.scopes_all = scopes.length;
        this.scopes_my = scopes.filter((scope) => scope.author.email === this.session.email).length;
      },
      (err) => console.error(err)
    );
  }

  public logout(): void {
  	this.userService.logout();
  	this.router.navigate(['/auth']);
  }

  public get_session_date(): Date {
    return new Date(this.session.exp*1000);
  }

}
