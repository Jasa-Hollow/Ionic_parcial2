import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  
  /* -----------------------------*/
  /* Agregar texto */
  text = "Tengo hambre";
  onTextChange() {
    let app = document.getElementById('myStyle');
    const p = document.createElement('p');
    p.textContent='No tengo hambre';

    app.appendChild(p);
  }
  /* -----------------------------*/

  /* -----------------------------*/
  /* Cambiar tamaño de texto */
  subtitle = "Joel estuvo aquí";
  onTextSize() {
    let subtitulo = document.getElementById('subtitulo');
    subtitulo.style.fontSize = "30px";
  }
  /* -----------------------------*/

}
