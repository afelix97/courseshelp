import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  imports: [RouterModule, MatButtonModule],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent {

  listCursos: any = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.listCursos = this.getFakeCourses();
  }

  //funcion para obtener informacion fake de cursos
  getFakeCourses() {
    return [
      {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "2 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "9 minutos",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        "duracion": "4 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        "duracion": "11 minutos",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "12 minutos",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "18 minutos",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "4 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "8 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        "duracion": "1 hora",
      }, {
        "titulo": "Titulo del curso",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "duracion": "1 hora",
      }
    ]
  }

}
