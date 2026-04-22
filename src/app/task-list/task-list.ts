import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  prioridad: string;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  /*
  mostrarMensaje = true;

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

  alternarMensaje() {
    this.mostrarMensaje = !this.mostrarMensaje;
  }
  cambiarEstado(tarea: Tarea) {
    tarea.completada = !tarea.completada;
  }
    */
  @Input() tareas: Tarea[] = [];

  cambiarEstado(tarea: Tarea) {
    tarea.completada = !tarea.completada;
  }
}
