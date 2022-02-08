import { Action, createReducer, on } from '@ngrx/store';

import { validFilters, setFilter } from './filter.actions';

export const initialState: validFilters = 'all';

const _filterReducer = createReducer<validFilters>(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);

export function filterReducer(state: any, action: Action) {
  return _filterReducer(state, action);
}
