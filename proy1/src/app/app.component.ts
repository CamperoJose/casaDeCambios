import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proy1';
  bs ;
  dolar;
  euro;
  soles;

  getValor(val) {
    console.warn(val);
    this.bs = parseInt(val);
  }
  toDolar(valor) {
    this.dolar = (parseFloat(this.bs) / 6.96).toFixed(2);
    console.warn(this.dolar);
  }
  toEuro(valor) {
    this.euro = (parseFloat(this.bs) / 6.82).toFixed(2);
    return this.euro;
  }
  toSol(valor) {
   

    this.soles = (parseFloat(this.bs) / 1.74).toFixed(2);
    return this.soles;
  }
}
