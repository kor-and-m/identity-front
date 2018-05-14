import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../share/services/auth.service';
import { iSession } from '../../share/interfaceses/session';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public session: iSession;

  constructor(
  	private userService: UserService,
  ) {
  	this.session = null;
  }

  ngOnInit() {
  	this.session = this.userService.get_session();
  }

}
