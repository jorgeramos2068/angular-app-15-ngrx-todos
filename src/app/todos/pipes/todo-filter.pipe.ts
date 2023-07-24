import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../models/todo.model';
import { validFilters } from 'src/app/filter/filter.actions';

@Pipe({
  name: 'todoFilter',
})
export class TodoFilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'active':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
}
