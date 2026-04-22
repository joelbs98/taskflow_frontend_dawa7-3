import { Component } from '@angular/core';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';
import { Footer } from './footer/footer';
import { TaskForm } from './task-form/task-form';

/*
Padre -> Hijo
Se usa @Input()

Hijo -> Padre
Se usa @Output() y EventEmitter
*/
interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  prioridad: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, TaskList, Footer, TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  tareas: Tarea[] = [
    {
      id: 1,
      titulo: 'Diseñar la interfaz inicial',
      descripcion: 'Crear la pantalla principal del sistema',
      completada: false,
      prioridad: 'Alta',
    },
    {
      id: 2,
      titulo: 'Diseñar la estructura del proyecto',
      descripcion: 'Organizar la base del frontend en Angular',
      completada: true,
      prioridad: 'Media',
    },
    {
      id: 3,
      titulo: 'Preparar clase de frontend',
      descripcion: 'Explicar Typescript y Angular',
      completada: false,
      prioridad: 'Alta',
    },
    {
      id: 4,
      titulo: 'Diseñar la interfaz inicial',
      descripcion: 'Crear la pantalla principal del sistema',
      completada: false,
      prioridad: 'Alta',
    },
    {
      id: 5,
      titulo: 'Diseñar la interfaz inicial',
      descripcion: 'Crear la pantalla principal del sistema',
      completada: false,
      prioridad: 'Alta',
    },
  ];
  agregarNuevaTarea(tarea: Tarea) {
    this.tareas.push(tarea);
  }
}
