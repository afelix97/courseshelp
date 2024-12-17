import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ComentariosComponent } from '@components/comentarios/comentarios.component';
import { InfoUserVideoComponent } from '@components/info-user-video/info-user-video.component';

@Component({
  selector: 'app-curso-actividad',
  imports: [MatButtonModule, MatCardModule, InfoUserVideoComponent, ComentariosComponent],
  templateUrl: './curso-actividad.component.html',
  styleUrl: './curso-actividad.component.scss'
})
export class CursoActividadComponent {

}
