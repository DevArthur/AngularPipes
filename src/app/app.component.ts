import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Capitán America';
  nombre2 : string = 'ArtUro LópEZ AlcaRAz';
  arreglo = [1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha : Date = new Date();
  activar : boolean = true;
  idioma : string = 'es';
  videoUrl : string = 'https://www.youtube.com/embed/ReaFJ_MD2cs';

  cambiarIdioma(idioma : string){
    this.idioma = idioma;
  }
  
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  heroe = {
    nombre:'Logan',
    clave:'Wolverin',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
