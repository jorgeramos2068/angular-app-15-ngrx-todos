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
