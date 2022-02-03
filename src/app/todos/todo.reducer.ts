import { Action, createReducer, on } from '@ngrx/store';

import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
