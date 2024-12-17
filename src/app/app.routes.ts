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
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cursos', component: AllCoursesComponent, },
  { path: 'detalle-curso/:id', component: DetalleCursoComponent },
  { path: 'curso-actividad/:id', component: CursoActividadComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'configuraciones', component: ConfiguracionesComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'page-not-found', component: PageNotFoundComponent }, //Wild Card Route for 404 request
  { path: '**', redirectTo: 'page-not-found' } //Wild Card Route for 404 request
];
