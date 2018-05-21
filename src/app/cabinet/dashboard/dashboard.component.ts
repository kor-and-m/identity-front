import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../share/services/auth.service';
import { ScopeService } from './../../share/services/scope.service';
import { iSession } from '../../share/interfaces/session';
import { iScope } from '../../share/interfaces/scope';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public session: iSession;
  public scopes: iScope[];

  constructor(
  	private userService: UserService,
    private scopeService: ScopeService,
  ) {
  	this.session = null;
    this.scopes = [];
  }

  ngOnInit() {
  	this.session = this.userService.get_session();
    this.scopeService.get_scopes().subscribe(
      (scopes) => this.scopes = scopes,
      (err) => console.error(err)
    )
  }

}
