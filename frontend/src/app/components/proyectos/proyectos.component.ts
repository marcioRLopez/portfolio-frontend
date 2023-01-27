import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private datos:DatosService) { }

  proys : string ="";

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.proys = data.proyectos;
    })
  }
  }


