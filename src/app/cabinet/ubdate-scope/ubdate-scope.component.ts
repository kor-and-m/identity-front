import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router, private scopeService: ScopeService,) {
  	this.action = 'create';
  }

  ngOnInit() {
    this.reset_scope();
  	this.route.data.subscribe((data) => {
      this.action = data['action'];
      if (this.action !== 'create') {
        this.route.params.subscribe((params) => {
          this.scopeService.get_scope(+params['id']).subscribe((scope) => this.scope = scope);
        });
      }
    });
  }

  public myUploader(files: File[]) {
    this.scope.icon = files[0];
  }

  private reset_scope() {
    this.scope = {
      title: '',
      description: '',
      back_url: '',
      icon: ','
    };
  }

  public onSubmit() {
    if (this.action === 'create') {
      this.scopeService.create_scope(this.scope);
      this.reset_scope();
      this.router.navigate(['/apps/management']);
    }
  }

}
