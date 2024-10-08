import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { NgFor, NgIf } from '@angular/common';
import { Todo } from '../todo';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent {

  task: any;
  updateTodo!: string;
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: any) => {
      this.todos = data;
      this.todos.sort((a, b) => this.sortByDate(a, b));
      console.log(this.todos);
    })
  }

  onDelete(id: string) {
    this.todoService.deleteTodo(id).subscribe(data => {
      console.log(this.todos);
    });
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  allowUpdate(todo: any) {
    this.updateTodo = todo.id;
    this.task = todo.task;
  }

  onSubmitUpdate(task: any, todo: Todo) {
    const updatedTodo = {
      id: todo.id,
      task: task || todo.task,
      date: todo.date,
    }
    this.todoService.updateTodo(updatedTodo).subscribe(data => console.log(data));
    this.todos = this.todos.map(el => el.id === todo.id ? updatedTodo : el);
    this.updateTodo = "";
    this.task = "";
  }

  getDate(date: string) {
    return this.todoService.getDate(date);
  }

  sortByDate(first: any, second: any) {
    const date1 = new Date(first.date);
    const date2 = new Date(second.date);
    if (date1 < date2) return -1;
    if (date1 > date2) return 1;
    return 0;
  }

  hideForm() {
    this.updateTodo = '';
  }

}
