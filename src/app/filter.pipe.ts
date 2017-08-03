import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any[], filter: string): any[] {

    switch (filter) {
      case 'All':
      return todos;
      case 'Active':
      return todos.filter(item=>!item.done);
      case 'Completed':
      return todos.filter(item=>item.done);
      default:
      return todos;
    }
  }

}
