import { Component } from '@angular/core';
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
  titulo = '';
  descripcion = '';
  prioridad = 'Media';

  agregarTarea() {
    console.log('Nueva tarea:', {
      titulo: this.titulo,
      descripcion: this.descripcion,
      prioridad: this.prioridad,
    });
    this.titulo = '';
    this.descripcion = '';
    this.prioridad = 'Media';
  }
}
