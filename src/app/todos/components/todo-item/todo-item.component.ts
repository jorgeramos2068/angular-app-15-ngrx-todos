import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import { Todo } from '../../models/todo.model';
import * as actions from '../../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('editInput') editInput!: ElementRef;

  public completedCheck!: FormControl;
  public txtInput!: FormControl;
  public editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.completedCheck = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.completedCheck.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggleTodo({ id: this.todo.id }));
    });
  }

  setEditing(): void {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.editInput.nativeElement.focus();
    });
  }

  finishEdition(): void {
    this.editing = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo.text) {
      return;
    }
    this.store.dispatch(
      actions.editTodo({ id: this.todo.id, text: this.txtInput.value })
    );
  }
}
