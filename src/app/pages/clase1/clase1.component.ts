import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase1',
  templateUrl: './clase1.component.html',
  styleUrls: ['./clase1.component.css']
})
export class Clase1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Ingrese las Edades';
  edad1: number =0;
  edad2: number =0;
  suma: number | undefined ;
  promedio: number | undefined ;

  Calcular(){
    this.suma= this.edad1 +this.edad2;
    this.promedio = this.suma/2;

  }

  Limpiar(){
    this.suma=0;
    this.promedio=0;
  }

}
