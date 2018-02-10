import { Component, OnInit } from '@angular/core';
import { REVESTIMIENTOS } from '../mock-modelos';
@Component({
  selector: 'app-droprevestimientos',
  templateUrl: './droprevestimientos.component.html',
  styleUrls: ['./droprevestimientos.component.css']
})

export class DroprevestimientosComponent implements OnInit {
  modelos = REVESTIMIENTOS;
  constructor() { }

  ngOnInit() {
  }

}
