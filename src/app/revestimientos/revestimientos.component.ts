import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-revestimientos',
  templateUrl: './revestimientos.component.html',
  styleUrls: ['./revestimientos.component.css']
})
export class RevestimientosComponent implements OnInit {
  _nombre: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this._nombre = this.route.snapshot.params['nombre'];
  }

}
