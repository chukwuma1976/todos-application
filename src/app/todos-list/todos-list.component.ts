import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { NgFor } from '@angular/common';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: any) => {
      this.todos = data;
      console.log(this.todos);
    })
    this.todoService.deleteTodo('210b8eb4-da0b-42c4-9fe6-249bb468abab')
      .subscribe(data => console.log(data));
  }
}
