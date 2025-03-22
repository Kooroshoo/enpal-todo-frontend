import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="taskForm" (ngSubmit)="onSubmit()">
      <input formControlName="title" placeholder="New Task" required>
      <button type="submit">Add Task</button>
    </form>
  `
})
export class AddTaskComponent {
  // Create an Output event to notify the parent component when a task is added.
  @Output() taskAdded = new EventEmitter<void>();

  // Define the form group with a non-nullable title control.
  taskForm = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true })
  });

  constructor(private taskService: TaskService) {}

  onSubmit() {
    if (this.taskForm.valid) {
      const title = this.taskForm.get('title')!.value;
      this.taskService.addTask(title).subscribe({
        next: () => {
          this.taskForm.reset();
          // Emit the event to signal that a task has been added.
          this.taskAdded.emit();
        },
        error: (err) => console.error('Error adding task:', err)
      });
    }
  }
}
