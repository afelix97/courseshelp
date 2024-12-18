import { Routes } from '@angular/router';
import { BlogComponent } from '@pages/blog/blog.component';
import { ConfiguracionesComponent } from '@pages/configuraciones/configuraciones.component';
import { ContactoComponent } from '@pages/contacto/contacto.component';
import { AllCoursesComponent } from '@pages/cursos/all-courses/all-courses.component';
import { CursoActividadComponent } from '@pages/cursos/curso-actividad/curso-actividad.component';
import { DetalleCursoComponent } from '@pages/cursos/detalle-curso/detalle-curso.component';
import { LoginComponent } from '@pages/login/login.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { PerfilComponent } from '@pages/perfil/perfil.component';
import { WelcomeComponent } from '@pages/welcome/welcome.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((login) => login.LoginComponent)
  },
  { path: 'welcome', component: WelcomeComponent }, {
    path: 'cursos',
    loadComponent: () => import('./pages/cursos/all-courses/all-courses.component').then((courses) => courses.AllCoursesComponent)
  }, {
    path: 'detalle-curso/:id',
    loadComponent: () => import('./pages/cursos/detalle-curso/detalle-curso.component').then((coursesDetail) => coursesDetail.DetalleCursoComponent)
  }, {
    path: 'curso-actividad/:id',
    loadComponent: () => import('./pages/cursos/curso-actividad/curso-actividad.component').then((coursesActivity) => coursesActivity.CursoActividadComponent)
  }, {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then((blog) => blog.BlogComponent)
  }, {
    path: 'contacto', loadComponent: () => import('./pages/contacto/contacto.component').then((contacto) => contacto.ContactoComponent)
  }, {
    path: 'configuraciones', loadComponent: () => import('./pages/configuraciones/configuraciones.component').then((configuraciones) => configuraciones.ConfiguracionesComponent)
  }, {
    path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.component').then((perfil) => perfil.PerfilComponent)
  },
  { path: 'page-not-found', component: PageNotFoundComponent }, //Wild Card Route for 404 request
  { path: '**', redirectTo: 'page-not-found' } //Wild Card Route for 404 request
];
