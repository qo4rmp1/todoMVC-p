import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  url: string = 'http://localhost:3000/todos';

  constructor(private http: Http) {
  }

  getTodos(): Observable<any> {
    return this.http.get(this.url).map(res=> res.json());
  }

  postTodos(newTodo): Observable<any> {
    return this.http.post(this.url, newTodo).map(res=> res.json());
  }

  deleteTodo(todo): Observable<any> {
     return this.http.delete(`${this.url}/${todo.id}`).map(res=> res.json());
  }

  putTodo(todo): Observable<any> {
    return this.http.put(`${this.url}/${todo.id}`, todo).map(res=> res.json());
  }
}
