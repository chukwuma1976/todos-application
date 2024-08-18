import { Routes } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

export const routes: Routes = [
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: 'todos', component: TodosListComponent },
    { path: 'add-todo', component: AddTodoComponent }
];
