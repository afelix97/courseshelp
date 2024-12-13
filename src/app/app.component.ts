import { Component, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavLeftComponent } from '@components/nav-left/nav-left.component';
import { NavTopComponent } from '@components/nav-top/nav-top.component';
import { AppService } from '@services/app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavTopComponent, NavLeftComponent, MatSidenavModule, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'CoursesHelp';
  showNavLeft: boolean = inject(AppService).isExpandNavBar();
  isViewWelcome: boolean = false;
  router: Router = inject(Router);

  @ViewChild('drawer') drawer!: MatDrawer;

  hasBackdrop = false;
  mode: MatDrawerMode[] = ['side', 'over', 'push'];

  appService: AppService = inject(AppService);

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { // Verifica si el evento es una navegación completada
        if (this.router.url === '/welcome' || this.router.url === '/page-not-found') {
          this.isViewWelcome = true;
        } else {
          this.isViewWelcome = false;
        }
      }
    });
  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 600;
  }

  hiddeMenuLeft() {
    this.drawer.toggle();
    this.appService.setStatusNavBar((!this.appService.isExpandNavBar()).toString());
  }
}
