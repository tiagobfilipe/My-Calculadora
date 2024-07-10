import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() {
  }

  calcular(numero1: number, numero2: number, sinal : string) : number{
    console.log(numero1);
    switch (sinal){
      case "+":
        return numero1 + numero2;
      case "-":
        return numero1 - numero2;
      case "/":
        return numero1 / numero2;
      case "*":
        return numero1 * numero2;
    }
    return 0;
  }
}
