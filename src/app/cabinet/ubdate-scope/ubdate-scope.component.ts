import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface iScopeCreate {
  back_url: string,
  description: string,
  icon: File,
  title: string,
}

@Component({
  selector: 'app-ubdate-scope',
  templateUrl: './ubdate-scope.component.html',
  styleUrls: ['./ubdate-scope.component.sass']
})
export class UbdateScopeComponent implements OnInit {

  public action: 'create' | 'update' | 'watch';

  constructor(private route: ActivatedRoute) {
  	this.action = 'create';
  }

  ngOnInit() {
  	this.route.data.subscribe((data) => this.action = data['action']);
  }

}
