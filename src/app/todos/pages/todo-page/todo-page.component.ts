import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import * as actions from '../../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: [
    `
      label,
      .toggle-all {
        cursor: pointer;
      }
    `,
  ],
})
export class TodoPageComponent implements OnInit {
  public allCompleted: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll(): void {
    this.allCompleted = !this.allCompleted;
    this.store.dispatch(actions.toggleAll({ allCompleted: this.allCompleted }));
  }
}
