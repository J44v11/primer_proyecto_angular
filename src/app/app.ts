import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //Creo nuestra lista vacia. Un array de strings
  listaCompra: string[] = [];

  // Creo una funcion para añadir un producto a la lista (agregar un string a nuestro array)
  agregar(nuevoProducto: string) {
    // Hacemos una validacion para evitar agregar productos vacios o solo con espacios
    if (nuevoProducto.trim() !== "") {
      this.listaCompra.push(nuevoProducto); // La funcion push añade el nuevo producto al final de la lista
    }
  }
}
