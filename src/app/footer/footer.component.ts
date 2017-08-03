import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  @Input('data') todos: any[] = [];
  overflow: boolean = false;
  filterType:string = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.overflow = (this.todos.length > 5);
  }

  @Output() doClearTodos = new EventEmitter();
  @Output() doFilterTodos = new EventEmitter();

  clearTodos() {
    this.doClearTodos.emit();
  }

  filterTodos(val) {
    console.log(val);
    this.filterType = val;
    this.doFilterTodos.emit(val);
  }
}
