import { Component } from '@angular/core';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, TaskList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
