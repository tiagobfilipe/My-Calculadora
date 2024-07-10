import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraModule } from './calculadora';
import {CalculadoraComponent} from "./components/calculadora";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraModule, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-calculadora';
}
