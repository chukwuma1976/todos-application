import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  path = 'http://localhost:5000/todos';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.path);
  }

  getTodoById(id: string) {
    return this.http.get(this.path + "/" + id);
  }

  addTodo(todo: any) {
    return this.http.post(this.path, todo);
  }

  updateTodo(todo: any) {
    return this.http.put(this.path + "/" + todo.id, todo);
  }

  deleteTodo(id: string) {
    return this.http.delete(this.path + "/" + id);
  }
}
