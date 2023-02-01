import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experiencias : any = [];

  constructor(private datos:DatosService) { }

 

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.experiencias = data.experiencia_laboral;
      
     
    })
    
  }

}
