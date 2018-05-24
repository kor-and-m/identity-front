import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { iScope } from '../../share/interfaces/scope';


@Component({
  selector: 'app-ubdate-scope',
  templateUrl: './ubdate-scope.component.html',
  styleUrls: ['./ubdate-scope.component.sass']
})
export class UbdateScopeComponent implements OnInit {

  public action: 'create' | 'update' | 'watch';
  public scope: iScope;

  constructor(private route: ActivatedRoute) {
  	this.action = 'create';
  }

  ngOnInit() {
    this.scope = {
      title: '',
      description: '',
      back_url: '',
    };
  	this.route.data.subscribe((data) => this.action = data['action']);
  }

  public onSubmit() {
    console.log(this.scope);
  }

}
