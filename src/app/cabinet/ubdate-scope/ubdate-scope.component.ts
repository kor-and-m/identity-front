import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { iScope } from '../../share/interfaces/scope';
import { ScopeService } from './../../share/services/scope.service';


@Component({
  selector: 'app-ubdate-scope',
  templateUrl: './ubdate-scope.component.html',
  styleUrls: ['./ubdate-scope.component.sass']
})
export class UbdateScopeComponent implements OnInit {

  public action: 'create' | 'update' | 'watch';
  public scope: iScope;

  constructor(private route: ActivatedRoute, private scopeService: ScopeService,) {
  	this.action = 'create';
  }

  ngOnInit() {
    this.reset_scope();
  	this.route.data.subscribe((data) => {
      this.action = data['action'];
      if (this.action !== 'create') {
        this.route.params.subscribe((params) => {
          if (params.get('id')){
            console.log(params, params.get('id'));
            this.scopeService.get_scope(+params.get('id')).subscribe((scope) => this.scope = scope);
          }
        });
      }
    });
  }

  private reset_scope() {
    this.scope = {
      title: '',
      description: '',
      back_url: '',
    };
  }

  public onSubmit() {
    if (this.action === 'create') {
      this.scopeService.create_scope(this.scope);
      this.reset_scope();
    }
    console.log(this.scope);
  }

}
