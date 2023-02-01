
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  studies : any = [];

  constructor(private datos: DatosService ) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.studies = data.estudios
    })
  }

}
