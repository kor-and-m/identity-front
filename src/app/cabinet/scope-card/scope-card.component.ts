import { Component, OnInit, Input } from '@angular/core';
import { iScope } from '../../share/interfaces/scope';

@Component({
  selector: 'app-scope-card',
  templateUrl: './scope-card.component.html',
  styleUrls: ['./scope-card.component.sass']
})
export class ScopeCardComponent implements OnInit {

  @Input() scope: iScope;
  @Input() hide_description: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
