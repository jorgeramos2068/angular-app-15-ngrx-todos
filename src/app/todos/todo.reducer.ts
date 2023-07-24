import { Action, createReducer, on } from '@ngrx/store';

import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Save the World'),
  new Todo('Help the Avengers'),
  new Todo('Wash my dishes'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggleTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  }),
  on(actions.editTodo, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      }
      return todo;
    });
  }),
  on(actions.deleteTodo, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),
  on(actions.toggleAll, (state, { allCompleted }) =>
    state.map((todo) => {
      return {
        ...todo,
        completed: allCompleted,
      };
    })
  ),
  on(actions.deleteCompleted, (state) =>
    state.filter((todo) => !todo.completed)
  )
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
