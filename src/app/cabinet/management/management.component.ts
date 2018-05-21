import { Component, OnInit } from '@angular/core';

import { ScopeService } from './../../share/services/scope.service';
import { UserService } from './../../share/services/auth.service';
import { iScope } from '../../share/interfaces/scope';
import { iSession } from '../../share/interfaces/session';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.sass']
})
export class ManagementComponent implements OnInit {

  public scopes: iScope[];
  public session: iSession;

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
      (scopes) => this.scopes = scopes.filter((scope) => scope.author.email === this.session.email),
      (err) => console.error(err)
    )
  }

}
