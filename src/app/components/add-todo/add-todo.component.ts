import { Component, Output, EventEmitter,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})


export class AddTodoComponent {
  title: string=""!;
  desc: string=""!;
  constructor() { }

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  @NgModule({
    imports: [
      FormsModule
    ]
  })

  onSubmit() {
    const todo: Todo = {
      sno:12,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }
}
