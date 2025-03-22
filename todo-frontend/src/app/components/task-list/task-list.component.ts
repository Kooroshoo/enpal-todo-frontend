import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, AddTaskComponent],
  template: `
    <!-- Listen to the taskAdded event from AddTaskComponent -->
    <app-add-task (taskAdded)="fetchTasks()"></app-add-task>
    <ul>
      <li *ngFor="let task of tasks">
        <span [ngClass]="{ completed: task.completed }">{{ task.title }}</span>
        <button (click)="toggleTask(task)">Toggle</button>
        <button (click)="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
    }
  `]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    // Refresh the task list from the backend.
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe(() => this.fetchTasks());
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.fetchTasks());
  }
}
