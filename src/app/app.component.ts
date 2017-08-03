import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputHint= 'What needs to be done?';
  todos: any[] = [];
  // tslint:disable-next-line:no-inferrable-types
  todo: string = '';
  filterType: string = '';
  toggleAll: boolean = false;

  constructor(private http: Http) {

  }

  addTodos() {
    if (this.todo) {
      this.todos = [...this.todos];
      this.todos.push({text: this.todo, done: false });
      this.todo = '';
    }
  }

  doClearTodos() {
    this.todos = this.todos.filter(data => !data.done );
  }

  doFilterTodos(val) {
    console.log(val);
    this.filterType = val;
  }

  doToggleAll() {
    // this.toggleAll = !this.toggleAll;
    this.todos = this.todos.map(item =>
      {
        item.done = this.toggleAll;
        return item;
      });
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(item => item !== todo);
  }
}
