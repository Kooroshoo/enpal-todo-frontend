import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-task-list></app-task-list>`,
  imports: [TaskListComponent]
})
export class AppComponent {}
