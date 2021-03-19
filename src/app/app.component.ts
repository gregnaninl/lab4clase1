import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

