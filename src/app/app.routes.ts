import { Routes } from '@angular/router';
import { BlogComponent } from '@pages/blog/blog.component';
import { ConfiguracionesComponent } from '@pages/configuraciones/configuraciones.component';
import { ContactoComponent } from '@pages/contacto/contacto.component';
import { CursosComponent } from '@pages/cursos/cursos.component';
import { LoginComponent } from '@pages/login/login.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { PerfilComponent } from '@pages/perfil/perfil.component';
import { WelcomeComponent } from '@pages/welcome/welcome.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'configuraciones', component: ConfiguracionesComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'page-not-found', component: PageNotFoundComponent }, //Wild Card Route for 404 request
  { path: '**', redirectTo: 'page-not-found' } //Wild Card Route for 404 request
];
