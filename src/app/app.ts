import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//Una interfaz define la estructura que debe tener un objeto
//Una interfaz funciona como un contrato. Nos ayuda a asegurar que todas las tareas tengan
//la misma estructura
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
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Taskflow';
  descripcion = 'Sistema web de gestión de tareas';
  curso = 'Desarrollo de aplicaciones web Avanzado';
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
}
