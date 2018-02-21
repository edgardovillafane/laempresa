import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  constructor() { }
 /* form: FormGroup;*/
  enviar() {
  console.log();
  }


  ngOnInit() {
  /*  this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      nombre: [null, Validators.required],
      telefono: [null, Validators.required],
    });*/
  }

}
