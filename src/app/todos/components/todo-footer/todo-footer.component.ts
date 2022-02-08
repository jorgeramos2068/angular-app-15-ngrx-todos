import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
    `
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class TodoFooterComponent implements OnInit {
  public currentFilter: validFilters = 'all';
  public filters: validFilters[] = ['all', 'completed', 'active'];
  public totalActive: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.totalActive = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  changeFilter(filter: validFilters): void {
    this.currentFilter = filter;
    this.store.dispatch(setFilter({ filter }));
  }
}
