import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  imports: [RouterModule, MatExpansionModule, MatButtonModule],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalleCursoComponent {
  readonly panelOpenState = signal(false);
}
