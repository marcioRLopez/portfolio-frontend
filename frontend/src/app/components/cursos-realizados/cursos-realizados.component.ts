import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-cursos-realizados',
  templateUrl: './cursos-realizados.component.html',
  styleUrls: ['./cursos-realizados.component.css']
})
export class CursosRealizadosComponent implements OnInit {

  constructor(private datos:DatosService) { }
  cursito :string = "";

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.cursito = data.cursos_realizados;
    })
  }

}
