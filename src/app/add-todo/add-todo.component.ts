import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatCardModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  task = '';

  constructor(private todoService: TodoService) { }

  onFormSubmit(todo: NgForm) {
    console.log(todo);
    const { task, date } = todo.form.value
    this.todoService.addTodo({ task, date }).subscribe(data => console.log(data));
    todo.reset();
  }

}
