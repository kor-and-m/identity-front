import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../share/services/auth.service';
import { iSession } from '../../share/interfaceses/session';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public session: iSession;

  constructor(
  	private userService: UserService,
  	private router: Router
  ) {
  	this.session = null;
  }

  ngOnInit() {
  	this.session = this.userService.get_session();
  }

  public logout(): void {
  	this.userService.logout();
  	this.router.navigate(['/auth']);
  }

  public get_session_date(): Date {
    return new Date(this.session.exp*1000);
  }

}
