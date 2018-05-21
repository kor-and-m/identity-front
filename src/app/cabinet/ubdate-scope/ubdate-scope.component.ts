import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubdate-scope',
  templateUrl: './ubdate-scope.component.html',
  styleUrls: ['./ubdate-scope.component.sass']
})
export class UbdateScopeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((data) => console.log(data));
  }

}
