import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private datos:DatosService) { }

  names : any = [];

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.names = data.names;
    })
  }

}
