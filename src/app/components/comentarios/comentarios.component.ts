import { Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  imports: [],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.scss'
})
export class ComentariosComponent {
  comentarios = [
    { fecha:"Martes 2 de Diciembre a las 14:45 h.",nombre: 'Juan', comentario: 'Excelente servicio, lo recomiendo.' },
    { fecha:"Viernes 13 de Diciembre a las 12:45 h.",nombre: 'Ana', comentario: 'He estado usando este producto durante unos días y estoy realmente ¡impresionado! La interfaz es intuitiva y fácil de usar, y el Las funciones son exactamente lo que necesito para optimizar mi flujo de trabajo.' },
    { fecha:"Martes 17 de Diciembre a las 16:45 h.",nombre: 'Laura', comentario: 'El servicio al cliente fue excelente.' },

  ];
}
