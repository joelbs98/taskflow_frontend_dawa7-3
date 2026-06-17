import { Component, OnInit, inject } from '@angular/core';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';
import { Footer } from './footer/footer';
import { TaskForm } from './task-form/task-form';
import { CommonModule } from '@angular/common';
import { ProductoService } from './services/producto.service';
import { Producto } from './models/producto';
import { FormsModule } from '@angular/forms';

/*
Padre -> Hijo
Se usa @Input()

Hijo -> Padre
Se usa @Output() y EventEmitter
*/

/*
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
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private productoService = inject(ProductoService);

  productos: Producto[] = [];
  errorMensaje: string = '';
  nuevoNombre: string = '';
  nuevoDisponible: boolean = true;
  productoEditandoId: number | null = null; //Esta variable nos permitira saber si el formulario
  //esta creando un producto nuevo o editando uno existente

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: () => {
        this.errorMensaje = 'No se pudieron cargar los productos';
      },
    });
  }

  agregarProducto(): void {
    //Construimos el objeto que se enviara a la API

    if (!this.nuevoNombre.trim()) {
      this.errorMensaje = 'El nombre del producto es obligatorio.';
      return;
    }

    const nuevoProducto = {
      nombre: this.nuevoNombre,
      disponible: this.nuevoDisponible,
    };

    this.productoService.agregarProducto(nuevoProducto).subscribe({
      //Llamar al metodo POST del servicio
      //subscribe -> Esperar la respuesta
      //next -> se ejecuta si la petición fue exitosa
      next: () => {
        //Limpiar el formulario, limpiar los errores, volver a cargar la lista
        this.nuevoNombre = '';
        this.nuevoDisponible = true;
        this.errorMensaje = '';
        this.cargarProductos();
      },
      error: () => {
        this.errorMensaje = 'No se pudo agregar el producto';
      },
    });
  }

  editarProducto(producto: Producto): void {
    this.productoEditandoId = producto.id;
    this.nuevoNombre = producto.nombre;
    this.nuevoDisponible = producto.disponible;
  }

  guardarProducto(): void {
    if (!this.nuevoNombre.trim()) {
      this.errorMensaje = 'El nombre del producto es obligatorio.';
      return;
    }

    const producto = {
      nombre: this.nuevoNombre,
      disponible: this.nuevoDisponible,
    };

    if (this.productoEditandoId === null) {
      this.productoService.agregarProducto(producto).subscribe({
        next: () => {
          this.limpiarFormulario();
          this.cargarProductos();
        },
        error: () => {
          this.errorMensaje = 'No se puede agregar el producto';
        },
      });
    } else {
      this.productoService.actualizarProducto(this.productoEditandoId, producto).subscribe({
        next: () => {
          this.limpiarFormulario();
          this.cargarProductos();
        },
        error: () => {
          this.errorMensaje = 'No se puede actualizar el producto';
        },
      });
    }
  }

  limpiarFormulario(): void {
    this.nuevoNombre = '';
    this.nuevoDisponible = true;
    this.productoEditandoId = null;
    this.errorMensaje = '';
  }

  eliminarProducto(id: number): void {
    this.productoService.eliminarProducto(id).subscribe({
      next: () => {
        this.cargarProductos();
      },
      error: () => {
        this.errorMensaje = 'No se pudo eliminar el producto';
      },
    });
  }
}
