import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('Hola', Validators.required);
  }

  ngOnInit(): void {}

  addTodo(): void {
    if (this.txtInput.invalid) {
      return;
    }
    this.store.dispatch(actions.createTodo({ text: this.txtInput.value }));
    this.txtInput.reset();
  }
}
