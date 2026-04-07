import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreProyecto = 'primer_proyecto_angular';
}
