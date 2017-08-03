import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
  url: string = 'http://localhost:3000/todos';

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.http.get(this.url).subscribe(res=> {
      this.todos = res.json()
    });
  }

  addTodos() {
    if (this.todo) {
      let newTodo = {text: this.todo, done: false};
      this.http.post(this.url, newTodo)
      .subscribe(res=>{
        let theNewTodo = res.json();
        this.todos = [...this.todos];
        this.todos.push(theNewTodo);
        console.log(theNewTodo);
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
    this.http.delete(`${this.url}/${todo.id}`)
    .subscribe(res=>{
      this.todos = this.todos.filter(item => item !== todo);
    });
  }

  putTodo(todo) {
    console.log(todo);
    this.http.put(`${this.url}/${todo.id}`, todo)
    .subscribe();
  }

}
