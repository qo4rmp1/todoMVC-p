import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  todos: any[];

  constructor(private http: Http) {
  }

}
