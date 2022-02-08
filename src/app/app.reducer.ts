import { ActionReducerMap } from '@ngrx/store';

import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';
import { Todo } from './todos/models/todo.model';
import { validFilters } from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: validFilters;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
