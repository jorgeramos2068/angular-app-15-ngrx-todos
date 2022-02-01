import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AddTodoComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
  ],
  imports: [CommonModule],
  exports: [TodoPageComponent],
})
export class TodosModule {}
