import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  inputHint= 'What needs to be done?';
  todos: any[] = [];
  // tslint:disable-next-line:no-inferrable-types
  todo: string = '';
  filterType: string = '';
  toggleAll: boolean = false;

  constructor(private dataSvc:HttpService) {

  }

  ngOnInit() {
    this.dataSvc.getTodos()
    .subscribe(res=> {this.todos = res;})
  }

  addTodos() {
    if (this.todo) {
      let newTodo = {text: this.todo, done: false};
      this.dataSvc.postTodos(newTodo)
      .subscribe(res=>{
        this.todos = [...this.todos];
        this.todos.push(res);
        console.log(res);
        this.todo = '';
      })
    }
  }

  doClearTodos() {
    this.todos = this.todos.filter(data => !data.done );
    this.todos.forEach(item => this.putTodo(item));
  }

  doFilterTodos(val) {
    console.log(val);
    this.filterType = val;
  }

  doToggleAll(evt) {
    this.todos = this.todos.map(item =>
      {
        item.done = evt;
        return item;
      });

    this.todos.forEach(item => {
      this.putTodo(item);
    })
  }

  deleteTodo(todo) {
    this.dataSvc.deleteTodo(todo)
    .subscribe(res=>{
      this.todos = this.todos.filter(item => item !== todo);
    });
  }

  putTodo(todo) {
    this.dataSvc.putTodo(todo)
    .subscribe();
  }

}
