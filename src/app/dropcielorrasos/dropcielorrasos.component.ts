import { Component, OnInit } from '@angular/core';
import { CIELORRASOS } from '../mock-modelos';
@Component({
  selector: 'app-dropcielorrasos',
  templateUrl: './dropcielorrasos.component.html',
  styleUrls: ['./dropcielorrasos.component.css']
})
export class DropcielorrasosComponent implements OnInit {
  modelos = CIELORRASOS;
  constructor() { }

  ngOnInit() {
  }

}
