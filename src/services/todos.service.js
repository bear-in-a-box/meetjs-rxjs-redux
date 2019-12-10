import { map } from "rxjs/operators";

import { Service } from "./_internals/service";

export class TodosService extends Service {
  constructor() {
    super([]);
  }

  count$ = this.data$.pipe(map(todos => todos.length));

  addTodo(text) {
    this.data$.next([...this.currentValue, text]);
  }

  clearTodos() {
    this.data$.next([]);
  }
}
