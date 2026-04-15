import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = 'Taskflow';
  descripcion = 'Sistema web de gestión de tareas';
  curso = 'Desarrollo de aplicaciones web Avanzado';
}
