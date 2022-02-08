import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[Todo] Create',
  props<{ text: string }>()
);

export const toggleTodo = createAction(
  '[Todo] Toggle',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[Todo] Edit',
  props<{ id: number; text: string }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[Todo] Toggle All',
  props<{ allCompleted: boolean }>()
);
