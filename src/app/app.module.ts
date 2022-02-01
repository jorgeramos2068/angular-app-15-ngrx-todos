import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
