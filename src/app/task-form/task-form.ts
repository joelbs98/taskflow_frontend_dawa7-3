import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*ngModel*/
@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Output() tareaAgregada = new EventEmitter<any>();
  titulo = '';
  descripcion = '';
  prioridad = 'Media';

  agregarTarea() {
    /*
    console.log('Nueva tarea:', {
      titulo: this.titulo,
      descripcion: this.descripcion,
      prioridad: this.prioridad,
    });*/
    if (this.titulo.trim() === '' || this.descripcion.trim() === '') {
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      titulo: this.titulo,
      descripcion: this.descripcion,
      completada: false,
      prioridad: this.prioridad,
    };

    this.tareaAgregada.emit(nuevaTarea);

    this.titulo = '';
    this.descripcion = '';
    this.prioridad = 'Media';
  }
}
