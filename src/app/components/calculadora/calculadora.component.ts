import {Component, OnInit} from '@angular/core';
import { CalculadoraService } from "../../services";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
  ],
  providers: [
    CalculadoraService
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent{
    private numero1 : string;
    private numero2 : string;
    private sinal : string;
    private resultado : string;

  constructor(private calculadoraService: CalculadoraService) {
    this.numero1 = "";
    this.numero2 = "";
    this.sinal = "";
    this.resultado = "";
  }

  adicionarNumero(numero : string){
    if(this.sinal == ""){
      this.numero1 += numero;
      this.resultado = this.numero1;
    } else {
      this.numero2 += numero;
      this.resultado = this.numero2;
    }
  }

  adicionarSinal(sinal : string){
    this.numero1 = this.resultado;
    this.numero2 = "";
    this.sinal = sinal;
    this.resultado = "";
  }

  calcular(){
    this.resultado = String(this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.sinal));
    this.sinal = "=";
  }

  get display(): string {
    return this.resultado;
  }

  get theSinal(): string {
    if(this.sinal != "="){
      return this.numero1 + " " + this.sinal + " " + this.numero2;
    }

    return "=";

  }

  limpar(){
    this.numero1 = "";
    this.numero2 = "";
    this.sinal = "";
    this.resultado = "";
  }

}
