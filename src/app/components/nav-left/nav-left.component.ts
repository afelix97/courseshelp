import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';
import { LinkSectionNavInterface } from './interfaces/link-section-nav.interface';
import { MatDrawer } from '@angular/material/sidenav';
import { AppService } from '@services/app.service';

@Component({
  selector: 'app-nav-left',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule, MatDividerModule, RouterLink],
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.scss'
})
export class NavLeftComponent {
  routesLinks: LinkSectionNavInterface[] = [
    {
      name: 'Inicio',
      icon: 'home',
      url: 'welcome'
    }, {
      name: 'Cursos',
      icon: 'local_library',
      url: 'cursos'
    }, {
      name: 'Blog',
      icon: 'web',
      url: 'blog'
    }, {
      name: 'Contactanos',
      icon: 'phone',
      url: 'contacto'
    }, {
      name: '¿Quienes somos?',
      icon: 'info',
      url: 'help'
    }, {
      name: 'Ayuda',
      icon: 'help',
      url: 'help'
    }, {
      name: 'Configuracion',
      icon: 'dns',
      url: 'configuraciones'
    },
  ];

  @Input() drawer!: MatDrawer;
  appService: AppService = inject(AppService);

  isMobilehiddeMenu() {
    if (this.isMobileDevice()) {
      this.ocultarMenu();
    }
  }

  ocultarMenu() {
    this.drawer.toggle();

    this.appService.setStatusNavBar((!this.appService.isExpandNavBar()).toString());
  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 600;
  }
}
