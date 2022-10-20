import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proy1';
  bs:any;
  dolar:any;
  euro:any;
  soles:any;


  getValor(val: any) {
    console.warn(val);
    this.bs = parseInt(val);
  }
  toDolar(valor: any) {
    this.dolar = (parseFloat(this.bs) / 6.96).toFixed(2);
    console.warn(this.dolar);
  }
  toEuro(valor: any) {
    this.euro = (parseFloat(this.bs) / 6.82).toFixed(2);
    return this.euro;
  }
  toSol(valor: any) {
   

    this.soles = (parseFloat(this.bs) / 1.74).toFixed(2);
    return this.soles;
  }
}
